import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateContextProvider } from "./components/state-ctx/state-ctx.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateContextProvider>
    <App />
  </StateContextProvider>
);

reportWebVitals();
