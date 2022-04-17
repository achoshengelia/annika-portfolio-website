import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './default';
import GlobalStyles from './globalStyles';

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
