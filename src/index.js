import React from "react";
import ReactDOM from "react-dom";
import reducer from "./store/reducers/auth";
import { createStore, compose, applyMiddleware } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./box.css";
import ReactGA from "react-ga";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhances(applyMiddleware(thunk)));

ReactGA.initialize("UA-155326309-1");
ReactGA.pageview(window.location.pathname + window.location.search);
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
