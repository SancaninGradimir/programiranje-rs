import React from 'react';
import { useTranslation } from 'react-i18next';
import { useGrowthBook } from '@growthbook/growthbook-react';
import SEO from '../components/seo';
import { Loader } from '../components/helpers';
import LandingTop from '../components/landing/components/landing-top';
// Testimonials (alumni stories) are intentionally not rendered on the homepage
// for now — the platform does not have its own graduates yet. The component is
// kept intact in ../components/landing/components/testimonials and can be
// re-imported when we have real learner stories ("Iskustva naših polaznika").
import Certifications from '../components/landing/components/certifications';
import LandingCatalog from '../components/landing/components/landing-catalog';
import Faq from '../components/landing/components/faq';
import Benefits from '../components/landing/components/benefits';
import { useClaimableCertsNotification } from '../components/helpers/use-claimable-certs-notification';

import '../components/landing/landing.css';

const Landing = () => (
  <main
    id='landing-content'
    data-testid='landing-content'
    className={`landing-page`}
  >
    <LandingTop />
    <Benefits />
    {/* Testimonials section (alumni stories) is intentionally omitted from the
        homepage for now — see note above the imports. */}
    <Certifications />
    <LandingCatalog />
    <Faq />
  </main>
);

function IndexPage(): JSX.Element {
  const { t } = useTranslation();
  const growthbook = useGrowthBook();
  useClaimableCertsNotification();

  if (growthbook && growthbook.ready) {
    growthbook.getFeatureValue('landing-aa-test', false);
    return (
      <>
        <SEO title={t('metaTags:title')} />
        <Landing />
      </>
    );
  } else {
    return (
      <>
        <SEO title={t('metaTags:title')} />
        <Loader fullScreen={true} />
      </>
    );
  }
}

IndexPage.displayName = 'IndexPage';

export default IndexPage;
