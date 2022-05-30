import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalContext } from '../context/globalContext';
import defaultTheme from './default';
import GlobalStyles from './globalStyles';

const Theme = ({ children }) => {
  const { showMenu, isItemDetailsPage, isShufflePage, isMaxHeight } =
    useContext(GlobalContext);

  const globalStylesProps = {
    showMenu,
    isMaxHeight: isMaxHeight || isItemDetailsPage || isShufflePage,
    isShufflePage
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles {...globalStylesProps} />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
