const defaultTheme = {
  fonts: {
    main: 'Kern, sans-serif'
  },
  colors: {
    primary: {
      light: '#EDEDED',
      main: '#E5E5E5',
      dark: '#C7C7C7',
      transparent: 'rgba(229, 229, 229, .96)'
    },
    secondary: {
      light: '#999',
      main: '#000',
      dark: '#F29B45'
    },
    background: {
      light: '#FFF',
      main: '#E5E5E5',
      dark: '#000',
      transparent: 'rgba(0, 0, 0, .6)'
    },
    text: {
      light: '#999',
      main: '#000',
      dark: ''
    },
    other: {
      white: '#fff',
      black: '#000',
      purple: '#9933FF'
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
