import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';

import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { Link } from '../helpers';
import {
  roadmaps,
  type Roadmap as RoadmapData,
  type RoadmapCourseStep,
  type RoadmapDifficulty,
  type RoadmapStage
} from './roadmap-config';

import './roadmap.css';

function getSuperBlockTitle(
  t: (key: string, options?: Record<string, unknown>) => unknown,
  superBlock: SuperBlocks
): string {
  const fallback = String(superBlock);
  const result = t(`intro:${superBlock}`, { returnObjects: true });
  if (
    result &&
    typeof result === 'object' &&
    !Array.isArray(result) &&
    'title' in result
  ) {
    return String((result as { title: unknown }).title);
  }
  return result ? String(result) : fallback;
}

function stageTitle(
  t: (key: string, options?: Record<string, unknown>) => unknown,
  stage: RoadmapStage
): string {
  if (stage.titleKey) {
    return String(t(stage.titleKey));
  }
  if (stage.superBlock) {
    return getSuperBlockTitle(t, stage.superBlock);
  }
  return '';
}

function DifficultyBadge({
  difficulty
}: {
  difficulty: RoadmapDifficulty;
}): JSX.Element {
  const { t } = useTranslation();
  const label = t(`curriculum.roadmap.levels.${difficulty}`) as string;
  return (
    <span
      className='roadmap-difficulty'
      data-test-label={`difficulty-${difficulty}`}
    >
      {t('curriculum.roadmap.difficulty-format', { label, difficulty })}
    </span>
  );
}

function CourseLink({ course }: { course: RoadmapCourseStep }): JSX.Element {
  const { t } = useTranslation();
  return (
    <li className='roadmap-subcourse'>
      <Link className='roadmap-course-link' to={`/learn/${course.superBlock}/`}>
        <span>{getSuperBlockTitle(t, course.superBlock)}</span>
        {course.difficulty && (
          <DifficultyBadge difficulty={course.difficulty} />
        )}
      </Link>
    </li>
  );
}

function RoadmapStageCard({
  stage,
  index
}: {
  stage: RoadmapStage;
  index: number;
}): JSX.Element {
  const { t } = useTranslation();

  if (stage.kind === 'group' && stage.courses) {
    return (
      <div className='roadmap-stage-card roadmap-stage-group'>
        <span className='roadmap-stage-number'>{index + 1}</span>
        <div className='roadmap-stage-body'>
          <h4 className='roadmap-stage-title'>{stageTitle(t, stage)}</h4>
          <ul className='roadmap-subcourses'>
            {stage.courses.map(course => (
              <CourseLink key={course.id} course={course} />
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className={`roadmap-stage-card roadmap-stage-${stage.kind}`}>
      <span className='roadmap-stage-number'>{index + 1}</span>
      <div className='roadmap-stage-body'>
        {stage.superBlock && (
          <>
            <Link
              className='roadmap-stage-link'
              to={`/learn/${stage.superBlock}/`}
            >
              <h4 className='roadmap-stage-title'>{stageTitle(t, stage)}</h4>
            </Link>
            {stage.difficulty && (
              <DifficultyBadge difficulty={stage.difficulty} />
            )}
            {stage.kind === 'projects' && (
              <span className='roadmap-badge roadmap-badge-projects'>
                {t('curriculum.roadmap.projects-badge')}
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function RoadmapPath({ roadmap }: { roadmap: RoadmapData }): JSX.Element {
  const { t } = useTranslation();
  return (
    <div
      className='roadmap-path'
      id={`roadmap-path-${roadmap.id}`}
      data-test-label={`roadmap-path-${roadmap.id}`}
      role='region'
      aria-label={t(roadmap.titleKey) as string}
    >
      <h3 className='roadmap-path-title'>
        {t('curriculum.roadmap.path-label', {
          title: t(roadmap.titleKey)
        })}
      </h3>
      <ol className='roadmap-stages'>
        {roadmap.stages.map((stage, index) => (
          <li key={stage.id} className='roadmap-stage'>
            <RoadmapStageCard stage={stage} index={index} />
            {index < roadmap.stages.length - 1 && (
              <div className='roadmap-arrow' aria-hidden='true'>
                ↓
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function Roadmap(): JSX.Element {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleRoadmap = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const expanded = roadmaps.find(roadmap => roadmap.id === expandedId);
  const unsureHref = `/learn/${SuperBlocks.ComputerBasics}/`;

  return (
    <section className='roadmap-section' data-test-label='learning-roadmaps'>
      <Spacer size='l' />
      <h2 className='text-center big-heading'>
        {t('curriculum.roadmap.heading')}
      </h2>
      <Spacer size='m' />
      <div className='roadmap-cards'>
        {roadmaps.map(roadmap => (
          <button
            key={roadmap.id}
            type='button'
            className={`roadmap-card${
              expandedId === roadmap.id ? ' roadmap-card-active' : ''
            }`}
            onClick={() => toggleRoadmap(roadmap.id)}
            aria-expanded={expandedId === roadmap.id}
            aria-controls={`roadmap-path-${roadmap.id}`}
          >
            <span className='roadmap-card-emoji' aria-hidden='true'>
              {roadmap.emoji}
            </span>
            <span className='roadmap-card-title'>
              {t(roadmap.titleKey) as string}
            </span>
            <span className='roadmap-card-subtitle'>
              {t(roadmap.subtitleKey) as string}
            </span>
          </button>
        ))}
        <div className='roadmap-card roadmap-card-unsure'>
          <span className='roadmap-card-emoji' aria-hidden='true'>
            🤔
          </span>
          <span className='roadmap-card-title'>
            {t('curriculum.roadmap.paths.unsure.title')}
          </span>
          <span className='roadmap-card-subtitle'>
            {t('curriculum.roadmap.paths.unsure.subtitle')}
          </span>
          <Link className='roadmap-card-cta' to={unsureHref}>
            {t('curriculum.roadmap.start-cta')}
          </Link>
        </div>
      </div>
      {expanded && <RoadmapPath roadmap={expanded} />}
      <Spacer size='l' />
    </section>
  );
}

export default Roadmap;
