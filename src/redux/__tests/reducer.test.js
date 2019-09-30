import reducer, { initialStates } from "../reducer";

describe("Reducer tests", () => {
  it("should return initial state", () => {
    expect(reducer(initialStates, "INITIAL")).toEqual(initialStates);
  });

  it("should return isFetching true when action type GET_PROGRESS_PENDING", () => {
    const action = {
      type: "GET_PROGRESS_PENDING",
    };
    expect(reducer(initialStates, action)).toEqual({
      ...initialStates,
      isFetching: true,
    });
  });

  it("should set  action type GET_PROGRESS_SUCCESS", () => {
    const action = {
      type: "GET_PROGRESS_SUCCESS",
      payload: {
        data: {
          buttons: [42, -24, -16, 14],
          bars: [7, 100, 20, 0],
          limit: 172,
        }
      }
    };
    expect(reducer(initialStates, action)).toEqual({
      ...initialStates,
      isFetching: false,
      ...action.payload.data,
    });
  });

  it("should set  action type GET_PROGRESS_FAILURE", () => {
    const action = {
      type: "GET_PROGRESS_FAILURE",
      payload: {
        error: {
          message: "get progress failed",
        }
      }
    };
    expect(reducer(initialStates, action)).toEqual({
      ...initialStates,
      isFetching: false,
      ...action.payload,
    });
  });
});


describe("Update Progress tests", () => {
  let state;
  beforeEach(() => {
    const updateAction = {
      type: "GET_PROGRESS_SUCCESS",
      payload: {
        data: {
          buttons: [42, -24, -16, 14],
          bars: [7, 100, 20, 0],
          limit: 172,
        }
      }
    };
    state = reducer(initialStates, updateAction)
  })

  it("should add to progress when payload UPDATE_PROGRESS is a positive value", () => {
    const action = {
      type: "UPDATE_PROGRESS",
      payload: { index: 0, value: 20 }
    };
    expect(reducer(state, action)).toEqual({
      ...state,
      buttons: [42, -24, -16, 14],
      bars: [27, 100, 20, 0],
      limit: 172,
    });
  });

  it("should add to progress when payload UPDATE_PROGRESS is a negative value", () => {
    const action = {
      type: "UPDATE_PROGRESS",
      payload: { index: 0, value: -20 }
    };
    expect(reducer(state, action)).toEqual({
      ...state,
      buttons: [42, -24, -16, 14],
      bars: [0, 100, 20, 0],
      limit: 172,
    });
  });
});