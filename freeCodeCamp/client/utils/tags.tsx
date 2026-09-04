import i18next from 'i18next';
import React from 'react';

import { isMathJaxAllowed, mathJaxSrc } from '../src/utils/math-jax';

export function getheadTagComponents(): JSX.Element[] {
  // NOTE: The social preview image (og:image / twitter:image:src) previously
  // pointed to freeCodeCamp's CDN. It was removed until we create our own
  // brand image — re-add those tags when a brand asset becomes available.

  const headTags = [
    <meta
      content={i18next.t('metaTags:title')}
      key='og:title'
      name='og:title'
    />,
    <meta
      content={i18next.t('metaTags:social-description')}
      key='og:description'
      name='og:description'
    />,
    <meta content='summary' key='twitter:card' name='twitter:card' />,
    <meta
      content={i18next.t('metaTags:title')}
      key='twitter:title'
      name='twitter:title'
    />,
    <meta
      content={i18next.t('metaTags:social-description')}
      key='twitter:description'
      name='twitter:description'
    />
    // NOTE: The 'monetization' meta tag (freeCodeCamp's Web Monetization
    // payment pointer) was removed along with the non-profit model. It can be
    // re-added here if our platform ever adopts Web Monetization.
  ];
  return headTags;
}

export function getPostBodyComponents(superblock: string): JSX.Element[] {
  const scripts = [];
  const mathJaxScriptElement = (
    <script
      async={false}
      id='mathjax'
      key='mathjax'
      src={mathJaxSrc}
      type='text/javascript'
    />
  );

  if (isMathJaxAllowed(superblock)) {
    scripts.push(mathJaxScriptElement);
  }

  return scripts.filter(Boolean);
}

export function getPreBodyThemeScript(): JSX.Element[] {
  const script = (
    <script
      key='prebody-theme-init'
      dangerouslySetInnerHTML={{
        __html: `
(function(){
  let theme = 'light';
  const localTheme = localStorage.getItem('theme');

  if (localTheme !== null) {
    theme = localTheme === 'dark' ? 'dark' : 'light';
  } else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    theme = 'dark';
  }

  const bodyEl = document && document.body;

  if (bodyEl && bodyEl.classList) {
    bodyEl.classList.remove('light-palette');
    bodyEl.classList.remove('dark-palette');
    bodyEl.classList.add(theme + '-palette');
  }
})();`
      }}
    />
  );
  return [script];
}
