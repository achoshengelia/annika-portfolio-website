import { createContext, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const GlobalContext = createContext({
  showMenu: false,
  showFooter: false,
  isCurationsPage: false,
  isShufflePage: false,
  isMaxHeight: false,
  handleToggleShowMenu: () => {},
  setIsShufflePage: () => {},
  setIsCurationsPage: () => {},
  setIsMaxHeight: () => {}
});

export const GlobalContextProvider = ({ children }) => {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [isShufflePage, setIsShufflePage] = useState(false);
  const [isCurationsPage, setIsCurationsPage] = useState(false);
  const [isMaxHeight, setIsMaxHeight] = useState(false);

  const handleToggleShowMenu = () => setShowMenu(prevState => !prevState);
  const pageNeedsFooter = useCallback(() => {
    if (
      (pathname.toLowerCase().split('/').includes('design-artworks') &&
        pathname.toLowerCase().split('/').length <= 2) ||
      (pathname.toLowerCase().split('/').includes('curation') &&
        pathname.toLowerCase().split('/').length <= 2) ||
      pathname.toLowerCase().split('/').includes('index') ||
      pathname.toLowerCase().split('/').includes('about') ||
      pathname.toLowerCase().split('/').includes('imprint')
    ) {
      return true;
    } else {
      return false;
    }
  }, [pathname]);

  useEffect(() => {
    setShowFooter(false);

    if (pageNeedsFooter()) {
      setTimeout(() => {
        setShowFooter(true);
      }, 500);
    }
  }, [pathname, pageNeedsFooter]);

  const contextValue = {
    showMenu,
    showFooter,
    isCurationsPage,
    isShufflePage,
    isMaxHeight,
    handleToggleShowMenu,
    setIsShufflePage,
    setIsCurationsPage,
    setIsMaxHeight
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
