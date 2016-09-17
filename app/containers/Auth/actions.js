import {
  CHECK_LOGIN,
  CHECK_LOGIN_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_ERROR,
  LOGOUT,
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAIL,
} from './actionTypes';

export const checkLogin = () => ({ type: CHECK_LOGIN });

export const checkLoginSuccess = () => ({
  type: CHECK_LOGIN_SUCCESS,
});

export const login = (account, password) => ({
  type: LOGIN,
  account,
  password,
});

export const loginSuccess = ({ email }) => ({
  type: LOGIN_SUCCESS,
  email,
});

export const loginFail = message => ({
  type: LOGIN_FAIL,
  message,
});

export const loginError = error => ({
  type: LOGIN_ERROR,
  error,
});

export const logout = () => ({ type: LOGOUT });

export const fetchProfile = () => ({ type: FETCH_PROFILE });

export const fetchProfileSuccess = ({ name, email }) => ({
  type: FETCH_PROFILE_SUCCESS,
  name,
  email,
});

export const fetchProfileFail = error => ({
  type: FETCH_PROFILE_FAIL,
  error,
});

