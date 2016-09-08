import { handleActions } from 'redux-actions';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_ERROR,
} from './actionTypes';

const initalState = {
  email: null,
  error: null,
  message: null,
};

const reducer = handleActions({
  [LOGIN_SUCCESS]: (state, { email }) => ({
    ...state,
    email,
    error: null,
    message: null,
  }),
  [LOGIN_FAIL]: (state, { message }) => ({
    ...state,
    message,
  }),
  [LOGIN_ERROR]: (state, { error }) => ({
    ...state,
    error,
  }),
}, initalState);

export default reducer;

