import { call, put } from "redux-saga/effects";
import {
  getProgress
} from "../api";
import {
  getProgressHandler
} from "../saga";
import {
  getProgressSuccess,
  getProgressFailure
} from "../actions";

describe("Get progress saga testing: Success case", () => {
  const generator = getProgressHandler();
  let next = generator.next();

  it("should call getProgress", () => {
    expect(next.value).toEqual(call(getProgress));
  });

  it("should call getProgressSuccess", () => {
    const data = {
      buttons: [42, -10, 32],
      bars: [10, 40, 50],
      limit: 170,
    }
    next = generator.next(data);
    expect(next.value).toEqual(put(getProgressSuccess(data)));
  });

  it("should be done now", () => {
    expect(generator.next().done).toBeTruthy();
  });
});

describe("Get progress saga testing: Failure case", () => {
  const generator = getProgressHandler();
  let next = generator.next();

  it("should call getProgress", () => {
    expect(next.value).toEqual(call(getProgress));
  });

  it("should call getProgressFailure", () => {
    const error = {
      message: "Get progress failed"
    };
    next = generator.throw(error);
    expect(next.value).toEqual(put(getProgressFailure(error)));
  });

  it("should be done now", () => {
    expect(generator.next().done).toBeTruthy();
  });
});

