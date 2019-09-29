import { GET_PROGRESS_PENDING, GET_PROGRESS_SUCCESS, GET_PROGRESS_FAILURE } from "./constant";

export const getProgress = () => ({
    type: GET_PROGRESS_PENDING
})

export const getProgressSuccess = (data) => ({
    type: GET_PROGRESS_SUCCESS,
    paylaod: { data }
})

export const getProgressFailure = (error) => ({
    type: GET_PROGRESS_FAILURE,
    payload: { error }
})