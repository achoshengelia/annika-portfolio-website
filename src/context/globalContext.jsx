import { createContext, useState } from 'react';

export const GlobalContext = createContext({
  showMenu: false,
  toggleShowMenu: () => {}
});

export const GlobalContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleShowMenu = () => setShowMenu(prevState => !prevState);

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
