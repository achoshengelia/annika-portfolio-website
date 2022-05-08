import { createContext, useState } from 'react';

export const GlobalContext = createContext({
  showMenu: false,
  isCurationsPage: false,
  showFooter: true,
  handleToggleShowMenu: () => {},
  handleSetShowFooter: () => {}
});

export const GlobalContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const isCurationsPage = window.location.pathname
    .split('/')
    .includes('curation');

  const handleToggleShowMenu = () => {
    setShowMenu(prevState => !prevState);

    if (!showMenu) {
      return (document.body.style.overflow = 'hidden');
    }

    document.body.style = null;
  };
  const handleSetShowFooter = value => setShowFooter(value);

  const contextValue = {
    showMenu,
    showFooter,
    isCurationsPage,
    handleToggleShowMenu,
    handleSetShowFooter
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
