import { createGlobalStyle } from 'styled-components';
import theme from './constants/theme';

const { white } = theme.color;
const {relaway} = theme.font;

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    font-family: ${relaway};
    scroll-behavior: smooth;
    color: ${white};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyles;
