import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';

export type RoadmapDifficulty = 1 | 2 | 3 | 4 | 5;

export type RoadmapStageKind = 'course' | 'group' | 'projects';

export interface RoadmapCourseStep {
  id: string;
  superBlock: SuperBlocks;
  /** Real content difficulty (1–5). Separate from the position in the path. */
  difficulty?: RoadmapDifficulty;
}

export interface RoadmapStage {
  id: string;
  kind: RoadmapStageKind;
  /**
   * i18n key used for the top-level step label. Course/projects steps fall
   * back to the course title from the `intro` namespace when omitted.
   */
  titleKey?: string;
  /** Link target for `course` and `projects` steps. */
  superBlock?: SuperBlocks;
  /** Real content difficulty (1–5). Separate from the position in the path. */
  difficulty?: RoadmapDifficulty;
  /** Sub-courses rendered as links for `group` steps. */
  courses?: RoadmapCourseStep[];
}

export interface Roadmap {
  id: string;
  titleKey: string;
  subtitleKey: string;
  emoji: string;
  stages: RoadmapStage[];
}

/**
 * Certification superblocks that already contain real projects. Used as the
 * final "Projekti" step in each roadmap so the paths always point at existing
 * courses instead of placeholders.
 */
export const roadmapProjectSuperBlocks: SuperBlocks[] = [
  SuperBlocks.JsV9,
  SuperBlocks.PythonV9,
  SuperBlocks.MachineLearningPy,
  SuperBlocks.DataAnalysisPy
];

/**
 * Learning paths (Roadmaps). This is a purely presentational/navigational
 * layer above the existing course catalog: every step references an existing
 * `SuperBlocks` value and links to the already generated `/learn/<superBlock>/`
 * routes. No course data is duplicated here.
 */
export const roadmaps: Roadmap[] = [
  {
    id: 'web-programer',
    titleKey: 'curriculum.roadmap.paths.web.title',
    subtitleKey: 'curriculum.roadmap.paths.web.subtitle',
    emoji: '🌐',
    stages: [
      {
        id: 'kompjuterske-osnove',
        kind: 'course',
        titleKey: 'curriculum.roadmap.labels.computer-basics',
        superBlock: SuperBlocks.ComputerBasics,
        difficulty: 1
      },
      {
        id: 'html',
        kind: 'group',
        titleKey: 'curriculum.roadmap.groups.html',
        courses: [
          {
            id: 'osnove-html',
            superBlock: SuperBlocks.BasicHtml,
            difficulty: 1
          },
          {
            id: 'semanticki-html',
            superBlock: SuperBlocks.SemanticHtml,
            difficulty: 1
          },
          {
            id: 'html-i-pristupacnost',
            superBlock: SuperBlocks.HtmlAndAccessibility,
            difficulty: 2
          },
          {
            id: 'html-obrasci-i-tabele',
            superBlock: SuperBlocks.HtmlFormsAndTables,
            difficulty: 2
          }
        ]
      },
      {
        id: 'css',
        kind: 'group',
        titleKey: 'curriculum.roadmap.groups.css',
        courses: [
          {
            id: 'osnove-css-a',
            superBlock: SuperBlocks.BasicCss,
            difficulty: 1
          },
          {
            id: 'css-box-model',
            superBlock: SuperBlocks.CssBoxModel,
            difficulty: 2
          },
          {
            id: 'css-boje',
            superBlock: SuperBlocks.CssColors,
            difficulty: 1
          },
          {
            id: 'css-tipografija',
            superBlock: SuperBlocks.CssTypography,
            difficulty: 2
          },
          {
            id: 'css-jedinice',
            superBlock: SuperBlocks.AbsoluteAndRelativeUnits,
            difficulty: 2
          },
          {
            id: 'css-selektori',
            superBlock: SuperBlocks.AttributeSelectors,
            difficulty: 2
          },
          {
            id: 'css-pozicioniranje',
            superBlock: SuperBlocks.CssPositioning,
            difficulty: 2
          },
          {
            id: 'css-flexbox',
            superBlock: SuperBlocks.CssFlexbox,
            difficulty: 2
          },
          {
            id: 'css-grid',
            superBlock: SuperBlocks.CssGrid,
            difficulty: 3
          },
          {
            id: 'responzivni-dizajn',
            superBlock: SuperBlocks.ResponsiveDesign,
            difficulty: 3
          },
          {
            id: 'css-promenljive',
            superBlock: SuperBlocks.CssVariables,
            difficulty: 2
          },
          {
            id: 'pseudoklase-i-pseudoelementi',
            superBlock: SuperBlocks.PseudoClassesAndElements,
            difficulty: 2
          },
          {
            id: 'stilizovanje-obrazaca',
            superBlock: SuperBlocks.StylingForms,
            difficulty: 2
          },
          {
            id: 'css-i-pristupacnost',
            superBlock: SuperBlocks.CssAndAccessibility,
            difficulty: 3
          },
          {
            id: 'css-animacije',
            superBlock: SuperBlocks.CssAnimations,
            difficulty: 3
          },
          {
            id: 'dizajn-za-developere',
            superBlock: SuperBlocks.DesignForDevelopers,
            difficulty: 3
          }
        ]
      },
      {
        id: 'javascript',
        kind: 'group',
        titleKey: 'curriculum.roadmap.groups.javascript',
        courses: [
          {
            id: 'promenljive-i-stringovi',
            superBlock: SuperBlocks.IntroductionToVariablesAndStringsInJS,
            difficulty: 1
          },
          {
            id: 'bulove-vrednosti-i-brojevi',
            superBlock: SuperBlocks.IntroductionToBooleansAndNumbersInJS,
            difficulty: 1
          },
          {
            id: 'funkcije',
            superBlock: SuperBlocks.IntroductionToFunctionsInJS,
            difficulty: 1
          },
          {
            id: 'nizovi',
            superBlock: SuperBlocks.IntroductionToArraysInJS,
            difficulty: 2
          },
          {
            id: 'objekti',
            superBlock: SuperBlocks.IntroductionToObjectsInJS,
            difficulty: 2
          },
          {
            id: 'petlje',
            superBlock: SuperBlocks.IntroductionToLoopsInJS,
            difficulty: 2
          },
          {
            id: 'review-osnova',
            superBlock: SuperBlocks.JavascriptFundamentalsReview,
            difficulty: 2
          },
          {
            id: 'dom-i-dogadjaji',
            superBlock: SuperBlocks.LearnDomManipulationAndEventsWithJS,
            difficulty: 2
          },
          {
            id: 'audio-video-dogadjaji',
            superBlock: SuperBlocks.LearnAudioAndVideoEventsWithJS,
            difficulty: 3
          },
          {
            id: 'js-i-pristupacnost',
            superBlock: SuperBlocks.IntroductionToJavascriptAndAccessibility,
            difficulty: 3
          },
          {
            id: 'debugging',
            superBlock: SuperBlocks.LearnJavascriptDebugging,
            difficulty: 3
          },
          {
            id: 'regularni-izrazi',
            superBlock: SuperBlocks.LearnBasicRegexWithJS,
            difficulty: 3
          },
          {
            id: 'datumi',
            superBlock: SuperBlocks.IntroductionToDatesInJS,
            difficulty: 2
          },
          {
            id: 'map-i-set',
            superBlock: SuperBlocks.IntroductionToMapsAndSetsInJS,
            difficulty: 3
          },
          {
            id: 'localstorage-i-crud',
            superBlock: SuperBlocks.LearnLocalstorageAndCrudOperationsWithJS,
            difficulty: 3
          },
          {
            id: 'klase',
            superBlock: SuperBlocks.IntroductionToJavascriptClasses,
            difficulty: 3
          },
          {
            id: 'callback-i-visi-red',
            superBlock:
              SuperBlocks.IntroductionToHigherOrderFunctionsAndCallbacksInJS,
            difficulty: 3
          },
          {
            id: 'rekurzija',
            superBlock: SuperBlocks.LearnRecursionWithJS,
            difficulty: 4
          },
          {
            id: 'asinhroni-javascript',
            superBlock: SuperBlocks.IntroductionToAsynchronousJS,
            difficulty: 4
          },
          {
            id: 'funkcionalno-programiranje',
            superBlock: SuperBlocks.IntroductionToFunctionalProgrammingWithJS,
            difficulty: 4
          }
        ]
      },
      {
        id: 'git-i-github',
        kind: 'course',
        titleKey: 'curriculum.roadmap.labels.git-github',
        superBlock: SuperBlocks.IntroductionToGitAndGithub,
        difficulty: 2
      },
      {
        id: 'projekti',
        kind: 'projects',
        titleKey: 'curriculum.roadmap.labels.projects',
        superBlock: SuperBlocks.JsV9,
        difficulty: 4
      }
    ]
  },
  {
    id: 'python-programer',
    titleKey: 'curriculum.roadmap.paths.python.title',
    subtitleKey: 'curriculum.roadmap.paths.python.subtitle',
    emoji: '🐍',
    stages: [
      {
        id: 'kompjuterske-osnove',
        kind: 'course',
        titleKey: 'curriculum.roadmap.labels.computer-basics',
        superBlock: SuperBlocks.ComputerBasics,
        difficulty: 1
      },
      {
        id: 'python-osnove',
        kind: 'group',
        titleKey: 'curriculum.roadmap.groups.python-osnove',
        courses: [
          {
            id: 'python-za-pocetnike',
            superBlock: SuperBlocks.LearnPythonForBeginners,
            difficulty: 1
          },
          {
            id: 'uvod-u-osnove-pythona',
            superBlock: SuperBlocks.IntroductionToPythonBasics,
            difficulty: 2
          },
          {
            id: 'petlje-i-sekvence',
            superBlock: SuperBlocks.LearnPythonLoopsAndSequences,
            difficulty: 2
          },
          {
            id: 'recnici-i-setovi',
            superBlock: SuperBlocks.LearnPythonDictionariesAndSets,
            difficulty: 2
          },
          {
            id: 'rukovanje-greskama',
            superBlock: SuperBlocks.LearnErrorHandlingInPython,
            difficulty: 2
          }
        ]
      },
      {
        id: 'strukture-podataka',
        kind: 'course',
        superBlock: SuperBlocks.IntroductionToLinearDataStructuresInPython,
        difficulty: 3
      },
      {
        id: 'algoritmi',
        kind: 'course',
        superBlock: SuperBlocks.LearnAlgorithmsInPython,
        difficulty: 3
      },
      {
        id: 'oop',
        kind: 'group',
        titleKey: 'curriculum.roadmap.groups.oop',
        courses: [
          {
            id: 'klase-i-objekti',
            superBlock: SuperBlocks.LearnPythonClassesAndObjects,
            difficulty: 3
          },
          {
            id: 'objektno-orijentisano-programiranje',
            superBlock: SuperBlocks.IntroductionToOOPInPython,
            difficulty: 3
          },
          {
            id: 'oop-sa-python-om',
            superBlock: SuperBlocks.LearnOOPWithPython,
            difficulty: 3
          }
        ]
      },
      {
        id: 'napredni-python',
        kind: 'group',
        titleKey: 'curriculum.roadmap.groups.napredni-python',
        courses: [
          {
            id: 'grafovi-i-stabla',
            superBlock: SuperBlocks.LearnGraphsAndTreesInPython,
            difficulty: 4
          },
          {
            id: 'dinamicko-programiranje',
            superBlock: SuperBlocks.LearnDynamicProgrammingInPython,
            difficulty: 5
          }
        ]
      },
      {
        id: 'git-i-github',
        kind: 'course',
        titleKey: 'curriculum.roadmap.labels.git-github',
        superBlock: SuperBlocks.IntroductionToGitAndGithub,
        difficulty: 2
      },
      {
        id: 'projekti',
        kind: 'projects',
        titleKey: 'curriculum.roadmap.labels.projects',
        superBlock: SuperBlocks.PythonV9,
        difficulty: 4
      }
    ]
  },
  {
    id: 'ai-rag',
    titleKey: 'curriculum.roadmap.paths.ai.title',
    subtitleKey: 'curriculum.roadmap.paths.ai.subtitle',
    emoji: '🤖',
    stages: [
      {
        id: 'kompjuterske-osnove',
        kind: 'course',
        titleKey: 'curriculum.roadmap.labels.computer-basics',
        superBlock: SuperBlocks.ComputerBasics,
        difficulty: 1
      },
      {
        id: 'python-osnove',
        kind: 'group',
        titleKey: 'curriculum.roadmap.groups.python-osnove',
        courses: [
          {
            id: 'python-za-pocetnike',
            superBlock: SuperBlocks.LearnPythonForBeginners,
            difficulty: 1
          },
          {
            id: 'uvod-u-osnove-pythona',
            superBlock: SuperBlocks.IntroductionToPythonBasics,
            difficulty: 2
          },
          {
            id: 'petlje-i-sekvence',
            superBlock: SuperBlocks.LearnPythonLoopsAndSequences,
            difficulty: 2
          },
          {
            id: 'recnici-i-setovi',
            superBlock: SuperBlocks.LearnPythonDictionariesAndSets,
            difficulty: 2
          },
          {
            id: 'rukovanje-greskama',
            superBlock: SuperBlocks.LearnErrorHandlingInPython,
            difficulty: 2
          }
        ]
      },
      {
        id: 'strukture-podataka-i-algoritmi',
        kind: 'group',
        titleKey: 'curriculum.roadmap.groups.strukture-podataka-algoritmi',
        courses: [
          {
            id: 'strukture-podataka',
            superBlock: SuperBlocks.IntroductionToLinearDataStructuresInPython,
            difficulty: 3
          },
          {
            id: 'algoritmi',
            superBlock: SuperBlocks.LearnAlgorithmsInPython,
            difficulty: 3
          }
        ]
      },
      {
        id: 'git-i-github',
        kind: 'course',
        titleKey: 'curriculum.roadmap.labels.git-github',
        superBlock: SuperBlocks.IntroductionToGitAndGithub,
        difficulty: 2
      },
      {
        id: 'sql-postgresql',
        kind: 'course',
        superBlock: SuperBlocks.IntroductionToSQLAndPostgreSQL,
        difficulty: 2
      },
      {
        id: 'rag-mcp',
        kind: 'course',
        superBlock: SuperBlocks.LearnRAGAndMCPFundamentals,
        difficulty: 3
      },
      {
        id: 'ai-projekti',
        kind: 'projects',
        titleKey: 'curriculum.roadmap.labels.ai-projects',
        superBlock: SuperBlocks.MachineLearningPy,
        difficulty: 4
      }
    ]
  },
  {
    id: 'data-backend',
    titleKey: 'curriculum.roadmap.paths.data.title',
    subtitleKey: 'curriculum.roadmap.paths.data.subtitle',
    emoji: '🗄️',
    stages: [
      {
        id: 'kompjuterske-osnove',
        kind: 'course',
        titleKey: 'curriculum.roadmap.labels.computer-basics',
        superBlock: SuperBlocks.ComputerBasics,
        difficulty: 1
      },
      {
        id: 'bash',
        kind: 'group',
        titleKey: 'curriculum.roadmap.groups.bash',
        courses: [
          {
            id: 'uvod-u-bash',
            superBlock: SuperBlocks.IntroductionToBash,
            difficulty: 2
          },
          {
            id: 'uvod-u-nano',
            superBlock: SuperBlocks.IntroductionToNano,
            difficulty: 1
          },
          {
            id: 'bash-skripting',
            superBlock: SuperBlocks.LearnBashScripting,
            difficulty: 3
          }
        ]
      },
      {
        id: 'git-i-github',
        kind: 'course',
        titleKey: 'curriculum.roadmap.labels.git-github',
        superBlock: SuperBlocks.IntroductionToGitAndGithub,
        difficulty: 2
      },
      {
        id: 'sql-postgresql',
        kind: 'group',
        titleKey: 'curriculum.roadmap.groups.sql-postgresql',
        courses: [
          {
            id: 'uvod-u-sql-i-postgresql',
            superBlock: SuperBlocks.IntroductionToSQLAndPostgreSQL,
            difficulty: 2
          },
          {
            id: 'sql-i-bash',
            superBlock: SuperBlocks.LearnSQLAndBash,
            difficulty: 3
          }
        ]
      },
      {
        id: 'python',
        kind: 'group',
        titleKey: 'curriculum.roadmap.groups.python',
        courses: [
          {
            id: 'python-za-pocetnike',
            superBlock: SuperBlocks.LearnPythonForBeginners,
            difficulty: 1
          },
          {
            id: 'uvod-u-osnove-pythona',
            superBlock: SuperBlocks.IntroductionToPythonBasics,
            difficulty: 2
          },
          {
            id: 'petlje-i-sekvence',
            superBlock: SuperBlocks.LearnPythonLoopsAndSequences,
            difficulty: 2
          },
          {
            id: 'recnici-i-setovi',
            superBlock: SuperBlocks.LearnPythonDictionariesAndSets,
            difficulty: 2
          },
          {
            id: 'rukovanje-greskama',
            superBlock: SuperBlocks.LearnErrorHandlingInPython,
            difficulty: 2
          },
          {
            id: 'klase-i-objekti',
            superBlock: SuperBlocks.LearnPythonClassesAndObjects,
            difficulty: 3
          },
          {
            id: 'objektno-orijentisano-programiranje',
            superBlock: SuperBlocks.IntroductionToOOPInPython,
            difficulty: 3
          }
        ]
      },
      {
        id: 'algoritmi-i-strukture-podataka',
        kind: 'group',
        titleKey: 'curriculum.roadmap.groups.algoritmi-i-strukture',
        courses: [
          {
            id: 'strukture-podataka',
            superBlock: SuperBlocks.IntroductionToLinearDataStructuresInPython,
            difficulty: 3
          },
          {
            id: 'algoritmi',
            superBlock: SuperBlocks.LearnAlgorithmsInPython,
            difficulty: 3
          }
        ]
      },
      {
        id: 'data-ai-projekti',
        kind: 'projects',
        titleKey: 'curriculum.roadmap.labels.data-projects',
        superBlock: SuperBlocks.DataAnalysisPy,
        difficulty: 4
      }
    ]
  }
];
