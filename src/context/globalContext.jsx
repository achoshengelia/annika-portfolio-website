import { createContext, useState } from 'react';

export const GlobalContext = createContext({
  showMenu: false,
  isCurationsPage: false,
  showFooter: true,
  isItemDetailsPage: false,
  handleToggleShowMenu: () => {},
  handleSetShowFooter: () => {},
  setIsItemDetailsPage: () => {}
});

export const GlobalContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const [isItemDetailsPage, setIsItemDetailsPage] = useState(false);
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
    handleToggleShowMenu,
    handleSetShowFooter,
    setIsItemDetailsPage
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
