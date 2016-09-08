import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_ERROR,
  LOGOUT,
} from './actionTypes';

export const login = (account, password) => ({
  type: LOGIN,
  account,
  password,
});

export const loginSuccess = (email) => ({
  type: LOGIN_SUCCESS,
  email,
});

export const loginFail = (message) => ({
  type: LOGIN_FAIL,
  message,
});

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  error,
});

export const logout = ({ type: LOGOUT });

