import { getProgress, getProgressSuccess, getProgressFailure, updateProgress } from "../actions"
import { GET_PROGRESS_PENDING, GET_PROGRESS_SUCCESS, GET_PROGRESS_FAILURE, UPDATE_PROGRESS } from "../constant"

describe("Actions tests", () => {
  it("Should return action type GET_PROGRESS_PENDING", () => {
    expect(getProgress()).toEqual({ type: GET_PROGRESS_PENDING});
  });

  it("Should return action type GET_PROGRESS_SUCCESS", () => {
    const data = { bars: [12,11], buttons: [23, 56, 43], limit: 163 };
    expect(getProgressSuccess(data)).toEqual({ payload: { data }, type: GET_PROGRESS_SUCCESS});
  });

  it("Should return action type GET_PROGRESS_FAILURE", () => {
    const error = { message: "Error while fetching" };
    expect(getProgressFailure(error)).toEqual({ payload: { error }, type: GET_PROGRESS_FAILURE});
  });

  it("Should return actio(n type UPDATE_PROGRESS", () => {
    expect(updateProgress(20, 0)).toEqual({ type: UPDATE_PROGRESS, payload: { index: 0, value: 20}})
  });
});