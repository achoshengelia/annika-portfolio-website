const defaultTheme = {
  fonts: {
    main: 'Kern, sans-serif'
  },
  colors: {
    primary: {
      light: '#EDEDED',
      main: '#E5E5E5',
      dark: '#C7C7C7'
    },
    secondary: {
      light: '#999999',
      main: '#000000',
      dark: '#F29B45'
    },
    background: {
      light: '#FFFFFF',
      main: '#E5E5E5',
      dark: '#000000',
      transparent: 'rgba(0, 0, 0, .6)'
    },
    text: {
      light: '#999999',
      main: '#000000',
      dark: ''
    },
    other: {
      white: '#fff',
      black: '#000',
      purple: '#4b4b4b'
    }
  },
  breakpoints: {
    // 320px
    xs: 'only screen and (max-width: 20em)',
    // 600px
    sm: 'only screen and (max-width: 37.5em)',
    // 800px
    md: 'only screen and (max-width: 50em)',
    // 1024px
    lg: 'only screen and (max-width: 64em)'
  }
};

export default defaultTheme;
