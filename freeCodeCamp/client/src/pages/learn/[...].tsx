/* eslint-disable filenames-simple/naming-convention */
import { graphql } from 'gatsby';
import React from 'react';

import { ShowChallengeView } from '../../client-only-routes/show-challenge';

type ChallengeRouteData = {
  allChallengeNode: {
    nodes: Array<unknown>;
  };
};

interface Props {
  params: {
    '*': string;
  };
  data: ChallengeRouteData;
}

function LearnChallengeRoute(props: Props): JSX.Element {
  return <ShowChallengeView {...props} />;
}

LearnChallengeRoute.displayName = 'LearnChallengeRoute';

export const query = graphql`
  query LearnChallengeRouteData {
    allChallengeNode(
      sort: [
        { challenge: { superOrder: ASC } }
        { challenge: { order: ASC } }
        { challenge: { challengeOrder: ASC } }
      ]
    ) {
      nodes {
        id
        challenge {
          id
          block
          certification
          challengeType
          dashedName
          disableLoopProtectPreview
          disableLoopProtectTests
          fields {
            blockHashSlug
            slug
          }
          helpCategory
          isLastChallengeInBlock
          saveSubmissionToDB
          superBlock
          template
          chapter
          module
        }
      }
    }
  }
`;

export default LearnChallengeRoute;