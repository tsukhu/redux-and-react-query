import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import withReduxStore from "./store/withReduxStore";
import "bulma";
import App from "./App";

const rootElement = document.getElementById("root");

const AppWithStore = withReduxStore(App, store);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWithStore />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
