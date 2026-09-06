import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Container, Row, Col, Spacer } from '@freecodecamp/ui';

import BigCallToAction from '../components/landing/components/big-call-to-action';
import { createPremiumCheckout } from '../utils/ajax';
import {
  isSignedInSelector,
  userSelector
} from '../redux/selectors';
import type { User } from '../redux/prop-types';

interface PremiumPageProps {
  isSignedIn: boolean;
  user: User | null;
}

const mapStateToProps = createSelector(
  isSignedInSelector,
  userSelector,
  (isSignedIn: boolean, user: User | null) => ({
    isSignedIn,
    user
  })
);

function PremiumPage({ isSignedIn, user }: PremiumPageProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const hasSubscription = user?.subscriptionStatus === 'active';

  async function handleCheckout() {
    setLoading(true);
    setError('');

    try {
      const { response, data } = await createPremiumCheckout();

      if (!response.ok || !data.checkoutUrl) {
        setError(data.error || 'Nije moguće pokrenuti Premium checkout.');
        return;
      }

      window.location.href = data.checkoutUrl;
    } catch {
      setError('Došlo je do greške. Pokušajte ponovo.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Premium | Učimo</title>
      </Helmet>

      <Container fluid={true}>
        <Container>
          <main>
            <Row>
              <Col md={8} mdOffset={2} sm={12}>
                <Spacer size='l' />

                <h1 id='content-start' className='text-center'>
                  Učimo Premium
                </h1>

                <Spacer size='m' />

                {!isSignedIn ? (
                  <>
                    <p className='text-center'>
                      Prijavite se da biste aktivirali Premium.
                    </p>

                    <Spacer size='m' />

                    <BigCallToAction text='Prijavi se' />
                  </>
                ) : hasSubscription ? (
                  <>
                    <p className='text-center'>
                      Vaša Premium pretplata je aktivna.
                    </p>
                  </>
                ) : (
                  <>
                    <p className='text-center'>
                      Aktivirajte Učimo Premium i otključajte Premium
                      sadržaj.
                    </p>

                    <Spacer size='m' />

                    <div className='text-center'>
                      <button
                        className='btn btn-cta'
                        type='button'
                        onClick={() => void handleCheckout()}
                        disabled={loading}
                      >
                        {loading
                          ? 'Otvaranje checkout-a...'
                          : 'Aktiviraj Premium'}
                      </button>
                    </div>

                    {error ? (
                      <>
                        <Spacer size='m' />
                        <p className='text-center'>{error}</p>
                      </>
                    ) : null}
                  </>
                )}

                <Spacer size='l' />
              </Col>
            </Row>
          </main>
        </Container>
      </Container>
    </>
  );
}

PremiumPage.displayName = 'Premium-Page';

export default connect(mapStateToProps)(PremiumPage);
