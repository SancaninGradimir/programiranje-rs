import Loadable from '@loadable/component';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Link, SkeletonSprite } from '../../helpers';
import { SEARCH_EXPOSED_WIDTH } from '../../../../config/misc';
import UčimoLogo from '../../../assets/icons/freecodecamp-logo';
import MenuButton from './menu-button';
import NavLinks from './nav-links';
import AuthOrProfile from './auth-or-profile';
// Note: LanguageList (language switcher) is intentionally not rendered anymore
// (project plan — single language for now). The component is kept intact in
// ./language-list for future use and can be re-imported here when needed.
// Note: The full SearchBar is intentionally not rendered either (project plan —
// the platform has no searchable books/courses yet). The component is kept
// intact in ../../search/searchBar/search-bar.tsx and can be re-imported with:
// const SearchBar = Loadable(() => import('../../search/searchBar/search-bar'));

import './universal-nav.css';

const SearchBarOptimized = Loadable(
  () => import('../../search/searchBar/search-bar-optimized')
);

type UniversalNavProps = {
  displayMenu: boolean;
  showMenu: () => void;
  hideMenu: () => void;
  menuButtonRef: React.RefObject<HTMLButtonElement>;
  user: {
    isDonating: boolean;
    username: string;
    picture: string;
    yearsTopContributor: string[];
  };
  fetchState: { pending: boolean };
  searchBarRef: React.RefObject<HTMLDivElement>;
  pathname: string;
};
const UniversalNav = ({
  displayMenu,
  showMenu,
  hideMenu,
  menuButtonRef,
  searchBarRef,
  user,
  fetchState
}: UniversalNavProps): JSX.Element => {
  const { pending } = fetchState;
  const { t } = useTranslation();
  const isSearchExposedWidth = useMediaQuery({
    query: `(min-width: ${SEARCH_EXPOSED_WIDTH}px)`
  });

  // The search UI is temporarily hidden on ALL pages (not just the landing
  // page) until the platform has its own searchable books, courses and
  // tutorials. SearchBarOptimized returns null when hidden={true}, so nothing
  // is rendered. The full search functionality is kept intact and can be
  // restored by setting hidden={false} (or re-adding the full SearchBar —
  // see the import note above).
  const search = <SearchBarOptimized hidden={true} innerRef={searchBarRef} />;
  return (
    <nav
      aria-label={t('aria.primary-nav')}
      className='universal-nav'
      id='universal-nav'
      data-playwright-test-label='header-universal-nav'
    >
      {isSearchExposedWidth && (
        <div className='universal-nav-left'>{search}</div>
      )}
      <Link
        className='universal-nav-logo'
        id='universal-nav-logo'
        to='/learn'
        data-playwright-test-label='header-universal-nav-logo'
      >
        <UčimoLogo aria-label={t('aria.fcc-curriculum')} />
      </Link>
      <div className='universal-nav-right main-nav'>
        {pending ? (
          <div className='nav-skeleton'>
            <SkeletonSprite />
          </div>
        ) : (
          <>
            {/* LanguageList (language switcher) is intentionally not rendered for
                now — the platform currently has only one language. The component
                and the whole i18n infrastructure are kept intact for future use
                (English, Croatian, Bosnian, Macedonian, Slovenian, ...). */}
            <MenuButton
              displayMenu={displayMenu}
              hideMenu={hideMenu}
              innerRef={menuButtonRef}
              showMenu={showMenu}
            />
            {!isSearchExposedWidth && search}
            <NavLinks
              displayMenu={displayMenu}
              hideMenu={hideMenu}
              menuButtonRef={menuButtonRef}
              showMenu={showMenu}
              user={user}
            />
            <AuthOrProfile user={user} />
          </>
        )}
      </div>
    </nav>
  );
};

UniversalNav.displayName = 'UniversalNav';
export default UniversalNav;
