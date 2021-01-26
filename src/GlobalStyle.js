import { createGlobalStyle } from 'styled-components';
import themeGet from '@styled-system/theme-get';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${themeGet('colors.text', '#262626')};
    font-family: ${themeGet('fonts.heading', 'Arial, sans-serif')};
  }
`;

export default GlobalStyle;
