import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const GlobalContext = createContext({
  showMenu: false,
  showFooter: false,
  isCurationsPage: false,
  isItemDetailsPage: false,
  isShufflePage: false,
  isMaxHeight: false,
  handleToggleShowMenu: () => {},
  setIsItemDetailsPage: () => {},
  setIsShufflePage: () => {}
});

export const GlobalContextProvider = ({ children }) => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [isItemDetailsPage, setIsItemDetailsPage] = useState(false);
  const [isShufflePage, setIsShufflePage] = useState(false);
  const [isMaxHeight, setIsMaxHeight] = useState(false);

  const isCurationsPage = location.pathname.split('/').includes('curation');

  const handleToggleShowMenu = () => setShowMenu(prevState => !prevState);

  useEffect(() => {
    const pageNeedsFooter = () => {
      if (
        (location.pathname
          .toLowerCase()
          .split('/')
          .includes('design-artworks') &&
          location.pathname.toLowerCase().split('/').length <= 2) ||
        (location.pathname.toLowerCase().split('/').includes('curation') &&
          location.pathname.toLowerCase().split('/').length <= 2) ||
        location.pathname.toLowerCase().split('/').includes('index') ||
        location.pathname.toLowerCase().split('/').includes('about') ||
        location.pathname.toLowerCase().split('/').includes('imprint')
      ) {
        return true;
      } else {
        return false;
      }
    };
    setShowFooter(false);

    if (pageNeedsFooter()) {
      setTimeout(() => {
        setShowFooter(true);
      }, 600);
    }
  }, [location.pathname]);

  const contextValue = {
    showMenu,
    showFooter,
    isCurationsPage,
    isItemDetailsPage,
    isShufflePage,
    isMaxHeight,
    handleToggleShowMenu,
    setIsItemDetailsPage,
    setIsShufflePage,
    setIsMaxHeight
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
