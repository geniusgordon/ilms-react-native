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
  [FETCH_ITEM_LIST]: (state) => ({
    list: true,
  }),
  [FETCH_ITEM_LIST_SUCCESS]: (state) => ({
    list: false,
  }),
  [FETCH_ITEM_LIST_FAIL]: (state) => ({
    list: false,
  }),
  [FETCH_ITEM_DETAIL]: (state) => ({
    detail: true,
  }),
  [FETCH_ITEM_DETAIL_SUCCESS]: (state) => ({
    detail: false,
  }),
  [FETCH_ITEM_DETAIL_FAIL]: (state) => ({
    detail: false,
  }),
}, initalState);

export default reducer;

