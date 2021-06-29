import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import GlobalStyle from "./utills/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
