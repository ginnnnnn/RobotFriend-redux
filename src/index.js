import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
// thunk is for redux to do async call, it holds the action untill recived res from api
//then pass to reducer
import "./index.css";
import App from "./containers/App";
import { searchRobots, requestRobots } from "./reducers";
import * as serviceWorker from "./serviceWorker";
import "tachyons";

const logger = createLogger();
//redux-logger is a middleware for monitor action to reducer and log everything
//good for debuging

const rootReducer = combineReducers({ searchRobots, requestRobots });
//comnineReducers() take an {reducer1,reducer2,reducer3...}
//combineReducers({...}) and make store has different keys for storeing the props
// like state.searchRobots.searchField state.requestRobots.robots

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);
//store contains functions getState() and dispatch(action)
//applyMiddleware is for using middleware

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById("root")
);
//Provider is a hoc for providing store to the children

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
