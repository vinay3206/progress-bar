import React from 'react';
import { Provider } from "react-redux";

import sagas from "./sagas";
import store from "./store";
import sagaMiddleware from "./saga-middleware";
import Home from './components/Home';

sagaMiddleware.run(sagas);


export default () => (
    <Provider store={store}>
        <Home />
    </Provider>
  );