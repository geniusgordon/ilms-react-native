import { handleActions } from 'redux-actions';
import {
  FETCH_ITEM_LIST,
  FETCH_ITEM_LIST_SUCCESS,
  FETCH_ITEM_LIST_FAIL,
  FETCH_ITEM_DETAIL,
  FETCH_ITEM_DETAIL_SUCCESS,
  FETCH_ITEM_DETAIL_FAIL,
} from '../actions/actionTypes';

const initalState = {
  list: false,
  detail: false,
};

const reducer = handleActions({
  [FETCH_ITEM_LIST]: () => ({
    list: true,
  }),
  [FETCH_ITEM_LIST_SUCCESS]: () => ({
    list: false,
  }),
  [FETCH_ITEM_LIST_FAIL]: () => ({
    list: false,
  }),
  [FETCH_ITEM_DETAIL]: () => ({
    detail: true,
  }),
  [FETCH_ITEM_DETAIL_SUCCESS]: () => ({
    detail: false,
  }),
  [FETCH_ITEM_DETAIL_FAIL]: () => ({
    detail: false,
  }),
}, initalState);

export default reducer;

