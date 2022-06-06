import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// the main grid of chars will be width: 1420 and height 300
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
