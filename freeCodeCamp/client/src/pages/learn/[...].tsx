/* eslint-disable filenames-simple/naming-convention */
import React from 'react';

import ShowChallenge from '../../client-only-routes/show-challenge';

interface Props {
  params: {
    '*': string;
  };
}

function LearnChallengeRoute(props: Props): JSX.Element {
  return <ShowChallenge {...props} />;
}

LearnChallengeRoute.displayName = 'LearnChallengeRoute';

export default LearnChallengeRoute;