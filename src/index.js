import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const boom = async () => {
  const data = await fetch("http://localhost:5000/requests");
  const ateam = await data.json();
  console.log(ateam);
};
boom();
