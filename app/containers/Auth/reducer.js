import { handleActions } from 'redux-actions';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_ERROR,
  FETCH_PROFILE_SUCCESS,
} from './actionTypes';

const initalState = {
  name: null,
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
  [FETCH_PROFILE_SUCCESS]: (state, { name, email }) => ({
    ...state,
    name,
    email,
  }),
}, initalState);

export default reducer;

