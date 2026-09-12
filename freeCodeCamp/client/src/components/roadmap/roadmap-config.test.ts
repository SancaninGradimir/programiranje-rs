import { describe, expect, it } from 'vitest';
import {
  SuperBlocks,
  SuperBlockStage,
  superBlockStages
} from '@freecodecamp/shared/config/curriculum';
import {
  roadmaps,
  roadmapProjectSuperBlocks,
  type Roadmap,
  type RoadmapCourseStep,
  type RoadmapStage
} from './roadmap-config';

const allSuperBlocks = Object.values(SuperBlocks);
const catalogSuperBlocks = superBlockStages[SuperBlockStage.Catalog];

const isDifficulty = (value: unknown): value is 1 | 2 | 3 | 4 | 5 =>
  typeof value === 'number' && value >= 1 && value <= 5;

function collectStages(roadmap: Roadmap): RoadmapStage[] {
  return roadmap.stages;
}

function collectCourseSuperBlocks(roadmaps: Roadmap[]): SuperBlocks[] {
  return roadmaps.flatMap(roadmap =>
    collectStages(roadmap)
      .filter(stage => stage.kind === 'course' && stage.superBlock)
      .map(stage => stage.superBlock as SuperBlocks)
  );
}

function collectProjectsSuperBlocks(roadmaps: Roadmap[]): SuperBlocks[] {
  return roadmaps.flatMap(roadmap =>
    collectStages(roadmap)
      .filter(stage => stage.kind === 'projects' && stage.superBlock)
      .map(stage => stage.superBlock as SuperBlocks)
  );
}

function collectGroupCourses(roadmaps: Roadmap[]): RoadmapCourseStep[] {
  return roadmaps.flatMap(roadmap =>
    collectStages(roadmap)
      .filter(stage => stage.kind === 'group')
      .flatMap(stage => stage.courses ?? [])
  );
}

describe('roadmaps', () => {
  it('defines the four expected learning paths in a stable order', () => {
    expect(roadmaps.map(roadmap => roadmap.id)).toEqual([
      'web-programer',
      'python-programer',
      'ai-rag',
      'data-backend'
    ]);
  });

  it('has unique roadmap ids and unique stage/step ids', () => {
    const roadmapIds = roadmaps.map(roadmap => roadmap.id);
    expect(new Set(roadmapIds).size).toBe(roadmapIds.length);

    for (const roadmap of roadmaps) {
      const stageIds = collectStages(roadmap).map(stage => stage.id);
      expect(new Set(stageIds).size, `${roadmap.id} stages`).toBe(
        stageIds.length
      );
      const courseIds = collectStages(roadmap)
        .filter(stage => stage.kind === 'group')
        .flatMap(stage => stage.courses ?? [])
        .map(course => course.id);
      expect(new Set(courseIds).size, `${roadmap.id} courses`).toBe(
        courseIds.length
      );
    }
  });

  it('only references existing superblocks', () => {
    const referenced = [
      ...collectCourseSuperBlocks(roadmaps),
      ...collectProjectsSuperBlocks(roadmaps),
      ...collectGroupCourses(roadmaps).map(course => course.superBlock)
    ];
    expect(referenced.length).toBeGreaterThan(0);
    for (const superBlock of referenced) {
      expect(allSuperBlocks).toContain(superBlock);
    }
  });

  it('maps every course step to an existing catalog superblock', () => {
    const courseSuperBlocks = collectCourseSuperBlocks(roadmaps);
    expect(courseSuperBlocks.length).toBeGreaterThan(0);
    for (const superBlock of courseSuperBlocks) {
      expect(catalogSuperBlocks).toContain(superBlock);
    }
  });

  it('maps every course in a group to an existing catalog superblock', () => {
    const groupCourses = collectGroupCourses(roadmaps);
    expect(groupCourses.length).toBeGreaterThan(0);
    for (const course of groupCourses) {
      expect(catalogSuperBlocks).toContain(course.superBlock);
    }
  });

  it('points every projects step at a known certification with real projects', () => {
    const projectsSuperBlocks = collectProjectsSuperBlocks(roadmaps);
    expect(projectsSuperBlocks.length).toBe(roadmaps.length);
    for (const superBlock of projectsSuperBlocks) {
      expect(roadmapProjectSuperBlocks).toContain(superBlock);
    }
  });

  it('keeps every difficulty within the 1–5 range', () => {
    for (const roadmap of roadmaps) {
      for (const stage of collectStages(roadmap)) {
        if (stage.difficulty !== undefined) {
          expect(isDifficulty(stage.difficulty)).toBe(true);
        }
        for (const course of stage.courses ?? []) {
          if (course.difficulty !== undefined) {
            expect(isDifficulty(course.difficulty)).toBe(true);
          }
        }
      }
    }
  });

  it('has at least one stage for each roadmap', () => {
    for (const roadmap of roadmaps) {
      expect(roadmap.stages.length).toBeGreaterThan(0);
    }
  });

  it('does not list the same superblock twice inside one roadmap', () => {
    for (const roadmap of roadmaps) {
      const stageSuperBlocks = collectStages(roadmap)
        .filter(stage => stage.superBlock)
        .map(stage => stage.superBlock as SuperBlocks);
      const courseSuperBlocks = collectStages(roadmap)
        .filter(stage => stage.kind === 'group')
        .flatMap(stage => stage.courses ?? [])
        .map(course => course.superBlock);
      const all = [...stageSuperBlocks, ...courseSuperBlocks];
      expect(new Set(all).size, `${roadmap.id} duplicates`).toBe(all.length);
    }
  });
});
