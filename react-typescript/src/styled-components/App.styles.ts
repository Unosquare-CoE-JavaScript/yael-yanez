import { createGlobalStyle } from "styled-components";

interface ThemeType {
  background: string;
}

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background 0.5s ease-in-out, 
      color 0.5s ease-in-out, 
      box-shadow 0.5s ease-in-out;
  }
  
  html,
  body {
    font-family: sans-serif;
    background:  ${({ theme }) => theme.background}; 
    overflow: hidden;
  }
`;

export default GlobalStyles;
