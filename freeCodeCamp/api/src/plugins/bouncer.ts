import type {
  FastifyPluginCallback,
  FastifyRequest,
  FastifyReply
} from 'fastify';
import fp from 'fastify-plugin';
import { getRedirectParams } from '../utils/redirection.js';

declare module 'fastify' {
  interface FastifyInstance {
    send401IfNoUser: (req: FastifyRequest, reply: FastifyReply) => void;
    send403IfNoPremium: (
      req: FastifyRequest,
      reply: FastifyReply
    ) => Promise<void>;
    redirectIfNoUser: (req: FastifyRequest, reply: FastifyReply) => void;
    redirectIfSignedIn: (req: FastifyRequest, reply: FastifyReply) => void;
  }
}

const plugin: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.decorate(
    'send401IfNoUser',
    async function (req: FastifyRequest, reply: FastifyReply) {
      if (!req.user) {
        const logger = fastify.log.child({ req, res: reply });

        logger.trace(
          'Protected route accessed by unauthenticated user. Sent 401.'
        );

        await reply.status(401).send({
          type: req.accessDeniedMessage?.type,
          message: req.accessDeniedMessage?.content
        });
      }
    }
  );

  fastify.decorate(
    'send403IfNoPremium',
    async function (req: FastifyRequest, reply: FastifyReply) {
      const user = req.user;

      // Do nothing if authentication already rejected this request.
      if (!user || reply.sent) return;

      const now = new Date();

      // Allow users with an active free trial.
      if (user.trialEndsAt && user.trialEndsAt > now) {
        return;
      }

      // Allow users with an active Polar subscription.
      if (user.subscriptionStatus === 'active') {
        return;
      }

      fastify.log.info(
        { userId: user.id },
        'Premium route accessed without an active subscription'
      );

      await reply.status(403).send({
        type: 'subscription_required',
        message: 'An active subscription is required to access this content.',
        checkout: '/premium/create-checkout'
      });
    }
  );

  fastify.decorate(
    'redirectIfNoUser',
    async function (req: FastifyRequest, reply: FastifyReply) {
      const logger = fastify.log.child({ req, res: reply });
      if (!req.user) {
        logger.trace(
          'Protected route accessed by unauthenticated user. Redirecting to login.'
        );
        const { origin } = getRedirectParams(req);
        await reply.redirectWithMessage(origin, {
          type: 'info',
          content:
            'Only authenticated users can access this route. Please sign in and try again.'
        });
      }
    }
  );

  fastify.decorate(
    'redirectIfSignedIn',
    async function (req: FastifyRequest, reply: FastifyReply) {
      if (req.user) {
        const logger = fastify.log.child({ req, res: reply });

        const { returnTo } = getRedirectParams(req);

        logger.trace(`User ${req.user?.id} redirected to: ${returnTo}`);

        await reply.redirect(returnTo);
      }
    }
  );

  done();
};

export default fp(plugin, {
  dependencies: ['auth', 'redirect-with-message'],
  name: 'bouncer'
});
