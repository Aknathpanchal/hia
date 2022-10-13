import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk"
import AppReducer from "./AppReducer/appReducer";
const rootReucer = combineReducers({ AppReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  rootReucer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
