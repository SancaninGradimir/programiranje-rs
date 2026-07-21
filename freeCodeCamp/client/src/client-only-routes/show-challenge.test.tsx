/* eslint-disable */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { ShowChallenge } from './show-challenge';

const { mockUseStaticQuery, mockWithPrefix, mockClassic } = vi.hoisted(() => ({
  mockUseStaticQuery: vi.fn(),
  mockWithPrefix: vi.fn((path: string) => path),
  mockClassic: vi.fn(({ pageContext }) => (
    <div data-testid='classic-template'>{pageContext.challengeMeta.id}</div>
  ))
}));

const createChallengeResponse = () => ({
  id: 'step-23-id',
  block: 'workshop-colored-markers',
  challengeFiles: [{ contents: 'seed', fileKey: 'indexhtml' }],
  challengeType: 0,
  description: '<p>challenge description</p>',
  required: [],
  solutions: [[{ contents: 'solution', key: 'indexhtml' }]],
  superBlock: 'responsive-web-design-v9',
  title: 'Step 23'
});

vi.mock('gatsby', () => ({
  graphql: vi.fn(),
  useStaticQuery: mockUseStaticQuery,
  withPrefix: mockWithPrefix
}));

vi.mock('../components/FourOhFour', () => ({
  default: () => <div>not-found</div>
}));

vi.mock('../components/helpers', () => ({
  Loader: () => <div>loading</div>
}));

vi.mock('../templates/Challenges/classic/show', () => ({
  default: mockClassic
}));

vi.mock('../templates/Challenges/projects/backend/show', () => ({
  default: () => <div>backend-template</div>
}));

vi.mock('../templates/Challenges/projects/frontend/show', () => ({
  default: () => <div>frontend-template</div>
}));

vi.mock('../templates/Challenges/quiz/show', () => ({
  default: () => <div>quiz-template</div>
}));

vi.mock('../templates/Challenges/codeally/show', () => ({
  default: () => <div>codeally-template</div>
}));

vi.mock('../templates/Challenges/exam/show', () => ({
  default: () => <div>exam-template</div>
}));

vi.mock('../templates/Challenges/ms-trophy/show', () => ({
  default: () => <div>ms-trophy-template</div>
}));

vi.mock('../templates/Challenges/fill-in-the-blank/show', () => ({
  default: () => <div>fill-in-the-blank-template</div>
}));

vi.mock('../templates/Challenges/generic/show', () => ({
  default: () => <div>generic-template</div>
}));

vi.mock('../templates/Challenges/exam-download/show', () => ({
  default: () => <div>exam-download-template</div>
}));

vi.mock('../templates/Challenges/utils/build', () => ({
  challengeHasPreview: () => true
}));

describe('<ShowChallenge />', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    mockUseStaticQuery.mockReturnValue({
      allChallengeNode: {
        nodes: [
          {
            id: 'step-1-id',
            challenge: {
              block: 'workshop-colored-markers',
              certification: 'responsive-web-design-v9',
              challengeType: 0,
              dashedName: 'step-1',
              disableLoopProtectPreview: false,
              disableLoopProtectTests: false,
              fields: {
                blockHashSlug: '/learn/responsive-web-design-v9/workshop-colored-markers#step-1',
                slug: '/learn/responsive-web-design-v9/workshop-colored-markers/step-1/'
              },
              helpCategory: 'HTML-CSS',
              isLastChallengeInBlock: false,
              saveSubmissionToDB: false,
              superBlock: 'responsive-web-design-v9',
              template: 'html5',
              chapter: 'css',
              module: 'css-colors'
            }
          },
          {
            id: 'step-23-id',
            challenge: {
              block: 'workshop-colored-markers',
              certification: 'responsive-web-design-v9',
              challengeType: 0,
              dashedName: 'step-23',
              disableLoopProtectPreview: false,
              disableLoopProtectTests: false,
              fields: {
                blockHashSlug: '/learn/responsive-web-design-v9/workshop-colored-markers#step-23',
                slug: '/learn/responsive-web-design-v9/workshop-colored-markers/step-23/'
              },
              helpCategory: 'HTML-CSS',
              isLastChallengeInBlock: true,
              saveSubmissionToDB: false,
              superBlock: 'responsive-web-design-v9',
              template: 'html5',
              chapter: 'css',
              module: 'css-colors'
            }
          }
        ]
      }
    });

    global.fetch = vi
      .fn()
      .mockResolvedValueOnce({
        ok: true,
        json: async () => createChallengeResponse()
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => createChallengeResponse()
      }) as unknown as typeof fetch;
  });

  it('loads challenge json and renders the mapped challenge template', async () => {
    render(
      <ShowChallenge
        params={{
          '*': 'responsive-web-design-v9/workshop-colored-markers/step-23'
        }}
      />
    );

    expect(screen.getByText('loading')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId('classic-template')).toBeInTheDocument();
    });

    expect(mockWithPrefix).toHaveBeenCalledWith(
      '/curriculum-data/v2/challenges/responsive-web-design-v9/workshop-colored-markers/step-23-id.json'
    );

    expect(mockClassic).toHaveBeenCalledWith(
      expect.objectContaining({
        pageContext: expect.objectContaining({
          challengeMeta: expect.objectContaining({
            id: 'step-23-id',
            isFirstStep: false,
            nextChallengePath: undefined,
            prevChallengePath:
              '/learn/responsive-web-design-v9/workshop-colored-markers/step-1/'
          })
        })
      }),
      expect.any(Object)
    );
  });

  it('renders not found when the slug does not match a challenge node', () => {
    render(
      <ShowChallenge
        params={{ '*': 'responsive-web-design-v9/workshop-colored-markers/missing' }}
      />
    );

    expect(screen.getByText('not-found')).toBeInTheDocument();
  });
});