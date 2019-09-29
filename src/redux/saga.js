import { takeEvery, put, fork, call } from "redux-saga/effects";

import { getProgress } from "./api";
import {
  getProgressSuccess,
  getProgressFailure
} from "./actions";
import { GET_PROGRESS_PENDING } from "./constant";



export function* getProgressHandler() {
  try {
    const data = yield call(getProgress);
    console.log("Progress data", data);
    yield put(getProgressSuccess(data));
  } catch (error) {
    console.log("Error", error);
    yield put(getProgressFailure(error));
  }
}



function* watchGetProgress() {
  yield takeEvery(GET_PROGRESS_PENDING, getProgressHandler);
}

export default [
  fork(watchGetProgress),
];