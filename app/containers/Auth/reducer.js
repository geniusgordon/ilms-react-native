import { handleActions } from 'redux-actions';
import {
  LOGIN_SUCCESS,
  CHECK_LOGIN_SUCCESS,
  FETCH_PROFILE_SUCCESS,
} from './actionTypes';

const initalState = {
  name: null,
  email: null,
};

const reducer = handleActions({
  [LOGIN_SUCCESS]: (state, { email }) => ({
    ...state,
    email,
  }),
  [FETCH_PROFILE_SUCCESS]: (state, { name, email }) => ({
    ...state,
    name,
    email,
  }),
}, initalState);

export default reducer;

