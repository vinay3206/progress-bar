import { createStore, applyMiddleware, compose } from "redux";

import createRootReducer from "./reducers";
import sagaMiddleware from "./saga-middleware";




const store = createStore(
  createRootReducer(history),
  compose(applyMiddleware(sagaMiddleware))
);

export default store;