import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { Polar } from '@polar-sh/sdk';

import {
  POLAR_ACCESS_TOKEN,
  POLAR_SUCCESS_URL
} from '../../utils/env.js';

const POLAR_PRODUCT_ID = '6d8ad6cb-e6ce-46d7-bd51-7e7dff5eeae3';

/**
 * Plugin for creating Polar checkout sessions.
 */
export const polarCheckoutRoute: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  const polar = new Polar({
    accessToken: POLAR_ACCESS_TOKEN,
    server: 'sandbox'
  });

  fastify.post('/premium/create-checkout', async (req, reply) => {
    const { user } = await req.getAuthedUser();

    if (!user) {
      return reply.code(401).send({
        error: 'You must be signed in to purchase a subscription.'
      });
    }

    try {
      const checkout = await polar.checkouts.create({
        products: [POLAR_PRODUCT_ID],

        // Connect the Polar customer to our user permanently.
        externalCustomerId: user.id,

        // Pre-fill the checkout email.
        customerEmail: user.email ?? undefined,

        // Store our user ID on the checkout/subscription.
        metadata: {
          userId: user.id
        },

        successUrl: POLAR_SUCCESS_URL
      });

      return reply.send({
        checkoutUrl: checkout.url
      });
    } catch (error) {
      fastify.log.error(error, 'Failed to create Polar checkout');

      return reply.code(500).send({
        error: 'Failed to create checkout'
      });
    }
  });


  fastify.get('/premium/test', async (req, reply) => {
    const { user, message } = await req.getAuthedUser();

    if (!user) {
      return reply.code(401).send({
        authenticated: false,
        message
      });
    }

    const now = new Date();

    const hasTrial =
      user.trialEndsAt !== null && user.trialEndsAt > now;

    const hasSubscription =
      user.subscriptionStatus === 'active';

    return reply.send({
      authenticated: true,
      userId: user.id,
      email: user.email,
      trialStartedAt: user.trialStartedAt,
      trialEndsAt: user.trialEndsAt,
      subscriptionStatus: user.subscriptionStatus,
      hasTrial,
      hasSubscription,
      hasPremiumAccess: hasTrial || hasSubscription
    });
  });

  done();
};
