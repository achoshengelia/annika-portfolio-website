import { createGlobalStyle, css } from 'styled-components';
import { turnPurple } from '../animations';

const animateBackground = css`
  animation: ${turnPurple} 1s forwards;
`;

const GlobalStyles = createGlobalStyle`
  *,*::after,*::before  {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  *::selection{
    background: ${props => props.theme.colors.other.purple};
    color: ${props => props.theme.colors.background.main};
  }

  html, body, #root {
    min-height: 100%;
    height: ${({ isMaxHeight }) => (isMaxHeight ? '100%' : null)}
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background.main};
    color: ${props => props.theme.colors.text.main};
    cursor: default;
    text-rendering: optimizeSpeed;
    overflow: ${props => (props.showMenu ? 'hidden' : null)};
    ${props => (props.isShufflePage ? animateBackground : null)}
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li{
    list-style: none;
  }

  button {
    border: none;
  }

  input { 
    &:focus{
      outline: none;
    }
    
  }

  img,
  picture {
  max-width: 100%;
  display: block;
}
`;

export default GlobalStyles;
