import React from "react";
import ReactDOM from "react-dom";
import { gsap, CSSPlugin } from 'gsap';
import App from "./App";

import GlobalStyle from "./components/GlobalStyle";

gsap.registerPlugin(CSSPlugin);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
