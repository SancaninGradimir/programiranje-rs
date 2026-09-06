import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import {
  validateEvent,
  WebhookVerificationError
} from '@polar-sh/sdk/webhooks';

import { POLAR_WEBHOOK_SECRET } from '../../utils/env.js';

export const polarWebhookRoute: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  // Polar signature verification requires the original request body.
  fastify.addContentTypeParser(
    'application/json',
    { parseAs: 'buffer' },
    (_req, body, parserDone) => {
      parserDone(null, body);
    }
  );

  fastify.post('/polar/webhook', async (req, reply) => {
    const rawBody = req.body as Buffer;

    const getHeader = (name: string): string => {
      const value = req.headers[name];

      if (Array.isArray(value)) {
        return value[0] ?? '';
      }

      return value ?? '';
    };

    const headers = {
      'webhook-id': getHeader('webhook-id'),
      'webhook-timestamp': getHeader('webhook-timestamp'),
      'webhook-signature': getHeader('webhook-signature')
    };

    let event;

    try {
      event = validateEvent(
        rawBody,
        headers,
        POLAR_WEBHOOK_SECRET
      );
    } catch (error) {
      if (error instanceof WebhookVerificationError) {
        fastify.log.warn('Invalid Polar webhook signature');

        return reply.code(403).send({
          error: 'Invalid webhook signature'
        });
      }

      fastify.log.error(error, 'Failed to validate Polar webhook');

      return reply.code(400).send({
        error: 'Invalid webhook'
      });
    }

    fastify.log.info(
      {
        eventType: event.type
      },
      'Polar webhook received'
    );

    // We only need subscription events for Premium access.
    if (
      event.type !== 'subscription.created' &&
      event.type !== 'subscription.updated' &&
      event.type !== 'subscription.active' &&
      event.type !== 'subscription.canceled' &&
      event.type !== 'subscription.uncanceled' &&
      event.type !== 'subscription.revoked' &&
      event.type !== 'subscription.past_due'
    ) {
      return reply.send({
        received: true,
        handled: false
      });
    }

    const subscription = event.data;

    const metadataUserId = subscription.metadata?.userId;

    const userId =
      typeof metadataUserId === 'string'
        ? metadataUserId
        : undefined;

    let user = userId
      ? await fastify.prisma.user.findUnique({
          where: {
            id: userId
          }
        })
      : null;

    // Fallback for subscriptions where metadata is unavailable.
    if (!user) {
      user = await fastify.prisma.user.findFirst({
        where: {
          OR: [
            {
              polarSubscriptionId: subscription.id
            },
            {
              polarCustomerId: subscription.customerId
            }
          ]
        }
      });
    }

    if (!user) {
      fastify.log.error(
        {
          eventType: event.type,
          subscriptionId: subscription.id,
          customerId: subscription.customerId,
          userId
        },
        'Polar webhook: user not found'
      );

      return reply.code(200).send({
        received: true,
        handled: false,
        reason: 'user_not_found'
      });
    }

    await fastify.prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        polarCustomerId: subscription.customerId,
        polarSubscriptionId: subscription.id,
        subscriptionStatus: subscription.status
      }
    });

    fastify.log.info(
      {
        eventType: event.type,
        userId: user.id,
        subscriptionId: subscription.id,
        status: subscription.status
      },
      'Polar subscription synchronized'
    );

    return reply.send({
      received: true,
      handled: true
    });
  });

  done();
};
