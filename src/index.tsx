import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./components/App";
import { store } from "./redux/store";

import "./assets/font-awesome/js/all";

import "bootstrap";
import "jquery";
import "popper.js";

import { initFirebase } from "./services/_firebase";
import { log } from "./services/log";

initFirebase().then(() => {
  log("Initialized the database");
});

let root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);

// @ts-ignore
Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};
