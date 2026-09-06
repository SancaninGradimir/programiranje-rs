import React from 'react';
import { Button, Panel, Spacer } from '@freecodecamp/ui';
import { navigate } from 'gatsby';

import { FullWidthRow } from '../helpers';

interface SubscriptionProps {
  subscriptionStatus: string | null;
  subscriptionEndDate: string | null;
  trialEndsAt: string | null;
}

function Subscription({
  subscriptionStatus,
  subscriptionEndDate,
  trialEndsAt
}: SubscriptionProps) {
  const now = new Date();

  const subscriptionEnd = subscriptionEndDate
    ? new Date(subscriptionEndDate)
    : null;

  const trialEnd = trialEndsAt ? new Date(trialEndsAt) : null;

  const hasActiveSubscription = subscriptionStatus === 'active';

  const hasRemainingSubscription =
    subscriptionEnd !== null && subscriptionEnd > now;

  const hasActiveTrial = trialEnd !== null && trialEnd > now;

  const hasPremiumAccess =
    hasActiveSubscription ||
    hasRemainingSubscription ||
    hasActiveTrial;

  const accessEndDate =
    hasRemainingSubscription
      ? subscriptionEnd
      : hasActiveTrial
        ? trialEnd
        : null;

  return (
    <FullWidthRow>
      <Panel variant='info' id='subscription'>
        <Panel.Heading>
          <h2>Pretplata</h2>
        </Panel.Heading>

        <Panel.Body>
          {hasPremiumAccess ? (
            <>
              <p>
                <strong>Status:</strong>{' '}
                {hasActiveSubscription
                  ? 'Premium pretplata je aktivna.'
                  : hasActiveTrial
                    ? 'Imate aktivan besplatan probni period.'
                    : 'Premium pristup je aktivan do kraja plaćenog perioda.'}
              </p>

              {accessEndDate && (
                <>
                  <Spacer size='s' />
                  <p>
                    <strong>Premium pristup važi do:</strong>{' '}
                    {accessEndDate.toLocaleDateString('sr-RS')}
                  </p>
                </>
              )}

              <Spacer size='s' />

              <Button
                block={true}
                onClick={() => void navigate('/premium')}
              >
                Pogledaj Premium
              </Button>
            </>
          ) : (
            <>
              <p>
                Trenutno nemate aktivnu Premium pretplatu.
              </p>

              <Spacer size='s' />

              <Button
                block={true}
                onClick={() => void navigate('/premium')}
              >
                Aktiviraj Premium
              </Button>
            </>
          )}
        </Panel.Body>
      </Panel>
    </FullWidthRow>
  );
}

Subscription.displayName = 'Subscription';

export default Subscription;
