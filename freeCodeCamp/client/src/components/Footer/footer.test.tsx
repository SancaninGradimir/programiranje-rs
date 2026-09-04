import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Footer from '.';

describe('<Footer />', () => {
  it('renders the platform description column', () => {
    render(<Footer />);

    expect(screen.getByText('footer.tax-exempt-status')).toBeInTheDocument();
    expect(screen.getByText('footer.mission-statement')).toBeInTheDocument();
    expect(screen.getByText('footer.donation-initiatives')).toBeInTheDocument();
  });

  it('temporarily hides the freeCodeCamp-specific footer sections', () => {
    // The donation call-to-action, trending guides, mobile app badges and the
    // non-profit link block are hidden for now (they link to freeCodeCamp and
    // describe a non-profit model). They are still kept in the Footer component,
    // gated behind the `showLegacyFooterContent` flag.
    render(<Footer />);

    expect(
      screen.queryByRole('link', {
        name: 'make a tax-deductible donation here'
      })
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole('list', { name: 'footer.trending-guides' })
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole('heading', { name: 'footer.mobile-app' })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByAltText('Download on the App Store')
    ).not.toBeInTheDocument();
    expect(
      screen.queryByAltText('Get it on Google Play')
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole('heading', { name: 'footer.our-nonprofit' })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: 'footer.links.about' })
    ).not.toBeInTheDocument();
  });
});
