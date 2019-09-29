import createReducer from  "../utils/create-reducer";

import {
    GET_PROGRESS_PENDING,
    GET_PROGRESS_FAILURE,
    GET_PROGRESS_SUCCESS,
} from "./constant";

export const initialStates = {
  isFetching: false,
  buttons: [],
  bars: [],
  limit: undefined,
  error: undefined,
};

export default createReducer(initialStates, {
    [GET_PROGRESS_PENDING]: (state) => ({
        ...state,
        isFetching: true
    }),

    [GET_PROGRESS_SUCCESS]: (state, payload) => ({
        ...state,
        isFetching: false,
    }),

    [GET_PROGRESS_FAILURE]: (state, { error }) => ({
        ...state,
        ...initialStates,
        error,
    }),
}); 