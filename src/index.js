import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App"; // One approach to handle out of bounds
import Alternative from "./Alternative"; // Second approach to handle out of bounds

ReactDOM.render(
  <React.StrictMode>
    <Alternative />
  </React.StrictMode>,
  document.getElementById("root")
);
