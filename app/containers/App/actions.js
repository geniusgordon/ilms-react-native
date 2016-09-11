import { ROUTE, DEEP_LINK } from './actionTypes';

export const route = (key, params) => ({
  type: ROUTE,
  key,
  params,
});

export const deepLink = (url) => ({
  type: DEEP_LINK,
  url,
});

