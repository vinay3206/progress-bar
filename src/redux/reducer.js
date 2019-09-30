import createReducer from  "../utils/create-reducer";

import {
    GET_PROGRESS_PENDING,
    GET_PROGRESS_FAILURE,
    GET_PROGRESS_SUCCESS,
    UPDATE_PROGRESS,
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

    [GET_PROGRESS_SUCCESS]: (state, { data }) => ({
        ...state,
        ...data,
        isFetching: false,
    }),

    [GET_PROGRESS_FAILURE]: (state, { error }) => ({
        ...state,
        ...initialStates,
        error,
    }),
    [UPDATE_PROGRESS]: (state, { value, index }) => {
      const { bars } = state;
      let newValue = bars[index] + value;
      if(newValue < 0) {
        newValue = 0;
      }
      bars[index] = newValue;
      return {
        ...state,
        bars,
      }
    }
});