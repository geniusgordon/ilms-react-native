import {
  ROUTE,
  DEEP_LINK,
  CHECK_UPDATE,
  CHECK_UPDATE_SUCCESS,
} from './actionTypes';

export const route = (key, params) => ({
  type: ROUTE,
  key,
  params,
});

export const deepLink = url => ({
  type: DEEP_LINK,
  url,
});

export const checkUpdate = () => ({ type: CHECK_UPDATE });

export const checkUpdateSuccess = needUpdate => ({
  type: CHECK_UPDATE_SUCCESS,
  needUpdate,
});

