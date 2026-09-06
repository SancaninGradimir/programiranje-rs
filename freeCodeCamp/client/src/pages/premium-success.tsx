import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { Container, Row, Col, Spacer } from '@freecodecamp/ui';

function PremiumSuccessPage() {
  return (
    <>
      <Helmet>
        <title>Premium aktiviran | Učimo</title>
      </Helmet>

      <Container fluid={true}>
        <Container>
          <main>
            <Row>
              <Col md={8} mdOffset={2} sm={12}>
                <Spacer size='l' />

                <h1 id='content-start' className='text-center'>
                  Uspešno ste aktivirali Učimo Premium!
                </h1>

                <Spacer size='m' />

                <p className='text-center'>
                  Vaša Premium pretplata je uspešno aktivirana.
                </p>

                <p className='text-center'>
                  Sada možete nastaviti sa učenjem.
                </p>

                <Spacer size='m' />

                <div className='text-center'>
                  <Link className='btn btn-cta' to='/learn'>
                    Nastavi sa učenjem
                  </Link>
                </div>

                <Spacer size='l' />
              </Col>
            </Row>
          </main>
        </Container>
      </Container>
    </>
  );
}

PremiumSuccessPage.displayName = 'Premium-Success-Page';

export default PremiumSuccessPage;
