import { all } from "redux-saga/effects";
import { saga as progressSaga } from './redux'


// Main Saga
export default function* rootSaga() {
  yield all([...progressSaga]);
}