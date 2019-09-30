import { GET_PROGRESS_PENDING, GET_PROGRESS_SUCCESS, GET_PROGRESS_FAILURE, UPDATE_PROGRESS } from "./constant";

export const getProgress = () => ({
    type: GET_PROGRESS_PENDING,
});

export const getProgressSuccess = (data) => {
    return {
        type: GET_PROGRESS_SUCCESS,
        payload: { data },
    };
};

export const getProgressFailure = (error) => {
    return {
        type: GET_PROGRESS_FAILURE,
        payload: { error },
    };
};

export const updateProgress = (value, index) => {
  return {
    type: UPDATE_PROGRESS,
    payload: { value, index }
  }
}