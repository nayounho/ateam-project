import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    background-color: #fff;
  }
  body{
    margin:0 auto;
    padding:0;
    max-width:1440px;
  }
  body * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
