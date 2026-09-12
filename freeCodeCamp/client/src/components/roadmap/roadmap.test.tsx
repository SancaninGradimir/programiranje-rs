import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import Roadmap from './index';
import { roadmaps } from './roadmap-config';

describe('Roadmap', () => {
  test('renders the roadmap heading', () => {
    render(<Roadmap />);
    expect(screen.getByText('curriculum.roadmap.heading')).toBeInTheDocument();
  });

  test('renders a card for every roadmap plus an "unsure" card', () => {
    render(<Roadmap />);
    for (const roadmap of roadmaps) {
      expect(screen.getByText(roadmap.titleKey)).toBeInTheDocument();
      expect(screen.getByText(roadmap.subtitleKey)).toBeInTheDocument();
    }
    expect(
      screen.getByText('curriculum.roadmap.paths.unsure.title')
    ).toBeInTheDocument();
  });

  test('renders one card button per roadmap and an unsure card', () => {
    render(<Roadmap />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(roadmaps.length);
  });

  test('links the "unsure" card to computer basics', () => {
    render(<Roadmap />);
    const link = screen.getByRole('link', {
      name: 'curriculum.roadmap.start-cta'
    });
    expect(link).toHaveAttribute(
      'href',
      `/learn/${SuperBlocks.ComputerBasics}/`
    );
  });

  test('expands a roadmap path on click and links to its stage', () => {
    render(<Roadmap />);
    fireEvent.click(screen.getByText(roadmaps[0].titleKey));
    expect(screen.getByRole('region')).toBeInTheDocument();
    // the first stage is a single course with an explicit chapter label
    const firstStage = roadmaps[0].stages[0];
    const link = screen.getByRole('link', {
      name: firstStage.titleKey
    });
    expect(link).toHaveAttribute('href', `/learn/${firstStage.superBlock}/`);
  });

  test('collapses the path when the active card is clicked again', () => {
    render(<Roadmap />);
    const card = screen.getByText(roadmaps[0].titleKey);
    fireEvent.click(card);
    expect(screen.getByRole('region')).toBeInTheDocument();
    fireEvent.click(card);
    expect(screen.queryByRole('region')).not.toBeInTheDocument();
  });
});
