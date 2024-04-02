import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";
import reportWebVitals from "./reportWebVitals.js";
import { ContextProvider } from "./Context/Context.js";
import "./custom.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
  // <React.StrictMode>
  //   </React.StrictMode>
);

// TODO add context provider in index.jsx

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
