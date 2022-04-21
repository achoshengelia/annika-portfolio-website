import { createContext, useState } from 'react';

export const GlobalContext = createContext({
  showMenu: false,
  toggleShowMenu: () => {}
});

export const GlobalContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleShowMenu = () => {
    setShowMenu(prevState => !prevState);

    if (!showMenu) {
      return (document.body.style.overflow = 'hidden');
    }

    document.body.style = null;
  };

  const contextValue = {
    showMenu,
    handleToggleShowMenu
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
