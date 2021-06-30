import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    background-color: #fff;
  }
  body{
    padding:0;
    margin:0 auto;
  }
  body * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
