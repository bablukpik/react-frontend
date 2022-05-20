import { createGlobalStyle } from 'styled-components';
import {
  ColorGray20,
  FontFamilyDefault,
  FontSizeSm,
} from './tokens';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html { 
    font-size: 62.5%; /* =10px */
  }

  body {
    background-color: ${ColorGray20};
    font-family: ${FontFamilyDefault};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${FontSizeSm};
  }
`;
