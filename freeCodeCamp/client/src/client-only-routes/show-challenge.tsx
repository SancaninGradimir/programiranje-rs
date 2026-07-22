import { withPrefix, useStaticQuery, graphql } from 'gatsby';
import React, { useEffect, useMemo, useState } from 'react';
import { viewTypes } from '@freecodecamp/shared/config/challenge-types';

import FourOhFour from '../components/FourOhFour';
import { Loader } from '../components/helpers';
import type {
  ChallengeData,
  ChallengeNode,
  ChallengeMeta,
  PageContext
} from '../redux/prop-types';
import { challengeHasPreview } from '../templates/Challenges/utils/build';
import ShowCodeAlly from '../templates/Challenges/codeally/show';
import ShowExamDownload from '../templates/Challenges/exam-download/show';
import ShowExam from '../templates/Challenges/exam/show';
import ShowFillInTheBlank from '../templates/Challenges/fill-in-the-blank/show';
import ShowGeneric from '../templates/Challenges/generic/show';
import ShowMsTrophy from '../templates/Challenges/ms-trophy/show';
import ShowQuiz from '../templates/Challenges/quiz/show';
import ShowBackend from '../templates/Challenges/projects/backend/show';
import ShowFrontend from '../templates/Challenges/projects/frontend/show';
import ShowClassic from '../templates/Challenges/classic/show';

type ChallengeRouteProps = {
  params: {
    '*': string;
  };
};

type ChallengeRouteNode = {
  id: string;
  challenge: {
    id?: string;
    block: string;
    certification: ChallengeNode['challenge']['certification'];
    challengeType: number;
    dashedName: string;
    disableLoopProtectPreview: boolean;
    disableLoopProtectTests: boolean;
    fields: {
      blockHashSlug: string;
      slug: string;
    };
    helpCategory: string;
    isLastChallengeInBlock: boolean;
    saveSubmissionToDB?: boolean;
    superBlock: ChallengeNode['challenge']['superBlock'];
    template: string;
    chapter?: string;
    module?: string;
  };
};

export type ChallengeRouteData = {
  allChallengeNode: {
    nodes: ChallengeRouteNode[];
  };
};

type DynamicChallengeContext = PageContext & {
  challengeMeta: ChallengeMeta & {
    blockHashSlug: string;
    certification: ChallengeNode['challenge']['certification'];
    chapter?: string;
    dashedName: string;
    isLastChallengeInBlock: boolean;
    module?: string;
    required: ChallengeNode['challenge']['required'];
    template: string;
  };
};

type ChallengeResponse = ChallengeNode['challenge'] & {
  id: string;
};

const challengeTemplates = {
  backend: ShowBackend,
  classic: ShowClassic,
  modern: ShowClassic,
  frontend: ShowFrontend,
  quiz: ShowQuiz,
  codeAlly: ShowCodeAlly,
  exam: ShowExam,
  msTrophy: ShowMsTrophy,
  fillInTheBlank: ShowFillInTheBlank,
  generic: ShowGeneric,
  examDownload: ShowExamDownload
};

function normalizeLearnSlug(path = ''): string {
  const trimmed = path.replace(/^\/+|\/+$/g, '');
  return trimmed ? `/learn/${trimmed}` : '/learn';
}

function getChallengeFileId(node: ChallengeRouteNode): string {
  return node.challenge.id ?? node.id;
}

function getChallengeDataPath(node: ChallengeRouteNode): string {
  return withPrefix(
    `/curriculum-data/v2/challenges/${node.challenge.superBlock}/${node.challenge.block}/${getChallengeFileId(node)}.json`
  );
}

function mergeSolutionFiles(challenge: ChallengeResponse): ChallengeData {
  const solutionFiles = challenge.solutions?.[0] ?? [];
  const challengeFiles = challenge.challengeFiles ?? [];

  const findFileByKey = (key: string) =>
    solutionFiles.find(file => file.key === key || file.fileKey === key);

  return {
    challengeType: challenge.challengeType,
    completedDate: 0,
    id: challenge.id,
    challengeFiles: challengeFiles.map(file => ({
      ...file,
      contents: findFileByKey(file.fileKey)?.contents ?? file.contents
    }))
  };
}

function createRouteIndex(nodes: ChallengeRouteNode[]) {
  const bySlug = new Map<string, ChallengeRouteNode>();
  const nextById = new Map<string, string | undefined>();
  const prevById = new Map<string, string | undefined>();
  const firstStepById = new Map<string, boolean>();
  const lastByBlock = new Map<string, ChallengeRouteNode>();

  nodes.forEach((node, index) => {
    bySlug.set(node.challenge.fields.slug, node);
    prevById.set(node.id, nodes[index - 1]?.challenge.fields.slug);
    nextById.set(node.id, nodes[index + 1]?.challenge.fields.slug);
    firstStepById.set(
      node.id,
      index === 0 || nodes[index - 1]?.challenge.block !== node.challenge.block
    );
    lastByBlock.set(node.challenge.block, node);
  });

  return { bySlug, firstStepById, lastByBlock, nextById, prevById };
}

function getTemplateComponent(challengeType: number) {
  return challengeTemplates[
    viewTypes[challengeType] as keyof typeof challengeTemplates
  ];
}

export function ShowChallenge({ params }: ChallengeRouteProps): JSX.Element {
  const data = useStaticQuery<ChallengeRouteData>(graphql`
    query DynamicChallengeRouteData {
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
  `);

  return <ShowChallengeView params={params} data={data} />;
}

type ShowChallengeViewProps = ChallengeRouteProps & {
  data: ChallengeRouteData;
};

export function ShowChallengeView({
  params,
  data
}: ShowChallengeViewProps): JSX.Element {

  const routeIndex = useMemo(
    () => createRouteIndex(data.allChallengeNode.nodes),
    [data.allChallengeNode.nodes]
  );

  const currentNode = routeIndex.bySlug.get(normalizeLearnSlug(params['*']));
  const [currentChallenge, setCurrentChallenge] =
    useState<ChallengeResponse | null>(null);
  const [projectPreview, setProjectPreview] = useState<
    ChallengeData | undefined
  >();
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    if (!currentNode) {
      setCurrentChallenge(null);
      setProjectPreview(undefined);
      setHasFailed(false);
      return;
    }

    let isCancelled = false;

    const loadChallenge = async () => {
      setHasFailed(false);

      try {
        const currentResponse = await fetch(getChallengeDataPath(currentNode));
        if (!currentResponse.ok) throw new Error('Challenge request failed');
        const currentChallengeData =
          (await currentResponse.json()) as ChallengeResponse;

        let nextProjectPreview: ChallengeData | undefined;
        const previewNode = routeIndex.lastByBlock.get(currentNode.challenge.block);

        if (
          previewNode &&
          challengeHasPreview({
            challengeType: currentChallengeData.challengeType
          })
        ) {
          const previewChallengeData =
            previewNode.id === currentNode.id
              ? currentChallengeData
              : ((await (
                  await fetch(getChallengeDataPath(previewNode))
                ).json()) as ChallengeResponse);

          nextProjectPreview = mergeSolutionFiles(previewChallengeData);
        }

        if (!isCancelled) {
          setCurrentChallenge(currentChallengeData);
          setProjectPreview(nextProjectPreview);
        }
      } catch {
        if (!isCancelled) {
          setHasFailed(true);
          setCurrentChallenge(null);
          setProjectPreview(undefined);
        }
      }
    };

    void loadChallenge();

    return () => {
      isCancelled = true;
    };
  }, [currentNode, routeIndex.lastByBlock]);

  if (!currentNode || hasFailed) {
    return <FourOhFour />;
  }

  if (!currentChallenge) {
    return <Loader />;
  }

  const Template = getTemplateComponent(currentNode.challenge.challengeType);
  const challengeMeta: DynamicChallengeContext['challengeMeta'] = {
    block: currentNode.challenge.block,
    blockHashSlug: currentNode.challenge.fields.blockHashSlug,
    certification: currentNode.challenge.certification,
    challengeType: currentNode.challenge.challengeType,
    chapter: currentNode.challenge.chapter,
    dashedName: currentNode.challenge.dashedName,
    description: currentChallenge.description,
    disableLoopProtectPreview: currentNode.challenge.disableLoopProtectPreview,
    disableLoopProtectTests: currentNode.challenge.disableLoopProtectTests,
    helpCategory: currentNode.challenge.helpCategory,
    id: currentChallenge.id ?? currentNode.id,
    isFirstStep: routeIndex.firstStepById.get(currentNode.id) ?? false,
    isLastChallengeInBlock: currentNode.challenge.isLastChallengeInBlock,
    module: currentNode.challenge.module,
    nextChallengePath: routeIndex.nextById.get(currentNode.id),
    prevChallengePath: routeIndex.prevById.get(currentNode.id),
    required: currentChallenge.required,
    saveSubmissionToDB: currentNode.challenge.saveSubmissionToDB,
    superBlock: currentNode.challenge.superBlock,
    template: currentNode.challenge.template,
    title: currentChallenge.title
  };

  const pageContext: DynamicChallengeContext = {
    challengeMeta,
    projectPreview: {
      challengeData: projectPreview
    }
  };

  return (
    <Template
      data={{
        challengeNode: {
          challenge: {
            ...currentChallenge,
            assignments: currentChallenge.assignments ?? [],
            nodules: currentChallenge.nodules ?? [],
            questions: currentChallenge.questions ?? [],
            tests: currentChallenge.tests ?? [],
            fields: currentNode.challenge.fields,
            helpCategory: currentNode.challenge.helpCategory,
            saveSubmissionToDB: currentNode.challenge.saveSubmissionToDB,
            template: currentNode.challenge.template
          }
        }
      }}
      pageContext={pageContext}
    />
  );
}

ShowChallenge.displayName = 'ShowChallenge';
ShowChallengeView.displayName = 'ShowChallengeView';

export { normalizeLearnSlug, mergeSolutionFiles, createRouteIndex };

export default ShowChallenge;