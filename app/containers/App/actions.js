import { ROUTE } from './actionTypes';

export const route = (key, params) => ({
  type: ROUTE,
  key,
  params,
});
