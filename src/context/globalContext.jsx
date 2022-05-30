import { createContext, useState } from 'react';

export const GlobalContext = createContext({
  showMenu: false,
  showFooter: false,
  isCurationsPage: false,
  isItemDetailsPage: false,
  isShufflePage: false,
  handleToggleShowMenu: () => {},
  handleSetShowFooter: () => {},
  setIsItemDetailsPage: () => {},
  setIsShufflePage: () => {}
});

export const GlobalContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [isItemDetailsPage, setIsItemDetailsPage] = useState(false);
  const [isShufflePage, setIsShufflePage] = useState(false);

  const isCurationsPage = window.location.pathname
    .split('/')
    .includes('curation');

  const handleToggleShowMenu = () => setShowMenu(prevState => !prevState);
  const handleSetShowFooter = value => setShowFooter(value);

  const contextValue = {
    showMenu,
    showFooter,
    isCurationsPage,
    isItemDetailsPage,
    isShufflePage,
    handleToggleShowMenu,
    handleSetShowFooter,
    setIsItemDetailsPage,
    setIsShufflePage
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
