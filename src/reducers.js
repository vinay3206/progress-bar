import { combineReducers } from "redux";
import { reducers as progressReducers } from './redux';


const createRootReducer = () =>
  combineReducers({
    ...progressReducers,
  });

export default createRootReducer;