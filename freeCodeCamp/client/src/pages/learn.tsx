import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Container, Col, Row, Spacer } from '@freecodecamp/ui';

import Intro from '../components/Intro';
import Map from '../components/Map';
import LearnLayout from '../components/layouts/learn';
import {
  ShowChallengeView,
  type ChallengeRouteData
} from '../client-only-routes/show-challenge';
import {
  isSignedInSelector,
  userSelector,
  userFetchStateSelector
} from '../redux/selectors';

import callGA from '../analytics/call-ga';
import { useClaimableCertsNotification } from '../components/helpers/use-claimable-certs-notification';

interface FetchState {
  pending: boolean;
  complete: boolean;
  errored: boolean;
}

type MaybeUser = {
  name: string;
  username: string;
  completedChallengeCount: number;
  isDonating: boolean;
} | null;

const mapStateToProps = createSelector(
  userFetchStateSelector,
  isSignedInSelector,
  userSelector,
  (fetchState: FetchState, isSignedIn: boolean, user: MaybeUser) => ({
    fetchState,
    isSignedIn,
    user
  })
);

interface Slug {
  slug: string;
}

interface LearnPageProps {
  isSignedIn: boolean;
  fetchState: FetchState;
  location: {
    pathname?: string;
  };
  state: Record<string, unknown>;
  user: MaybeUser;
}

const EMPTY_USER = { name: '', completedChallengeCount: 0, isDonating: false };

function LearnPage({
  isSignedIn,
  fetchState: { pending, complete },
  location,
  user
}: LearnPageProps) {
  const { name, completedChallengeCount, isDonating } = user ?? EMPTY_USER;

  const { t } = useTranslation();
  useClaimableCertsNotification();

  const pathname = location?.pathname ?? '';
  const challengePathPrefix = '/learn/';
  const isLearnLandingPath = pathname === '/learn' || pathname === '/learn/';

  if (pathname.startsWith(challengePathPrefix) && !isLearnLandingPath) {
    return <DeepLearnRoute pathname={pathname} />;
  }

  return (
    <LearnLanding
      complete={complete}
      completedChallengeCount={completedChallengeCount}
      isDonating={isDonating}
      isSignedIn={isSignedIn}
      name={name}
      pending={pending}
    />
  );
}

LearnPage.displayName = 'LearnPage';

function DeepLearnRoute({ pathname }: { pathname: string }): JSX.Element {
  const [data, setData] = useState<ChallengeRouteData | null>(null);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const loadChallengeIndex = async () => {
      setHasFailed(false);

      const superBlock = pathname.replace(/^\/learn\/+/, '').split('/')[0];
      const response = await fetch(
        `/page-data/learn/${superBlock}/page-data.json`
      );

      if (!response.ok) {
        if (!isCancelled) {
          setHasFailed(true);
          setData(null);
        }
        return;
      }

      const pageData = (await response.json()) as {
        result?: { data?: ChallengeRouteData };
      };

      if (!isCancelled) {
        setData(pageData.result?.data ?? null);
      }
    };

    void loadChallengeIndex().catch(() => {
      if (!isCancelled) {
        setHasFailed(true);
        setData(null);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [pathname]);

  if (hasFailed) {
    return <Intro complete={false} completedChallengeCount={0} isDonating={false} isSignedIn={false} name='' pending={false} slug='' onLearnDonationAlertClick={() => {}} />;
  }

  if (!data) {
    return <div />;
  }

  return (
    <ShowChallengeView
      params={{
        '*': pathname.slice('/learn/'.length)
      }}
      data={data}
    />
  );
}

function LearnLanding({
  isSignedIn,
  complete,
  completedChallengeCount,
  isDonating,
  name,
  pending
}: {
  isSignedIn: boolean;
  complete: boolean;
  completedChallengeCount: number;
  isDonating: boolean;
  name: string;
  pending: boolean;
}): JSX.Element {
  const { challengeNode } = useStaticQuery<{
    challengeNode: {
      challenge: {
        fields: Slug;
      };
    } | null;
  }>(graphql`
    query LearnPageQuery {
      challengeNode(
        challenge: {
          superOrder: { eq: 0 }
          order: { eq: 0 }
          challengeOrder: { eq: 0 }
        }
      ) {
        challenge {
          fields {
            slug
          }
        }
      }
    }
  `);

  const slug = challengeNode?.challenge?.fields?.slug || '';

  const onLearnDonationAlertClick = () => {
    callGA({
      event: 'donation_related',
      action: `Learn Donation Alert Click`
    });
  };

  return (
    <LearnLayout>
      <Helmet title={t('metaTags:title')} />
      <Container>
        <Row>
          <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
            <Intro
              complete={complete}
              completedChallengeCount={completedChallengeCount}
              isSignedIn={isSignedIn}
              name={name}
              pending={pending}
              slug={slug}
              onLearnDonationAlertClick={onLearnDonationAlertClick}
              isDonating={isDonating}
            />
            <Map />
            <Spacer size='l' />
          </Col>
        </Row>
      </Container>
    </LearnLayout>
  );
}

export default connect(mapStateToProps)(LearnPage);
