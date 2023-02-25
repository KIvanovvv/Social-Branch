import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateContextProvider } from "./state-ctx/state-ctx.js";
import { HashRouter } from "react-router-dom";
// The app is using HashRouter for github-pages compactability
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </HashRouter>
);

reportWebVitals();
