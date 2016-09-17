import { handleActions } from 'redux-actions';
import {
  FETCH_ITEM_LIST,
  FETCH_ITEM_LIST_SUCCESS,
  FETCH_ITEM_LIST_FAIL,
  FETCH_ITEM_DETAIL,
  FETCH_ITEM_DETAIL_SUCCESS,
  FETCH_ITEM_DETAIL_FAIL,
  FETCH_EMAIL_LIST,
  FETCH_EMAIL_LIST_SUCCESS,
  FETCH_EMAIL_LIST_FAIL,
  FETCH_SCORE,
  FETCH_SCORE_SUCCESS,
  FETCH_SCORE_FAIL,
} from '../actions/actionTypes';

const initalState = {
  refresh: false,
  list: false,
  detail: false,
  email: false,
  score: false,
};

const reducer = handleActions({
  [FETCH_ITEM_LIST]: (state, { params }) => {
    if (params && params.refresh) {
      return { ...state, refresh: true };
    }
    return { ...state, list: true };
  },
  [FETCH_ITEM_LIST_SUCCESS]: state => ({ ...state, list: false, refresh: false }),
  [FETCH_ITEM_LIST_FAIL]: state => ({ ...state, list: false, refresh: false }),
  [FETCH_ITEM_DETAIL]: state => ({ ...state, detail: true }),
  [FETCH_ITEM_DETAIL_SUCCESS]: state => ({ ...state, detail: false }),
  [FETCH_ITEM_DETAIL_FAIL]: state => ({ ...state, detail: false }),
  [FETCH_EMAIL_LIST]: state => ({ ...state, score: true }),
  [FETCH_EMAIL_LIST_SUCCESS]: state => ({ ...state, score: false }),
  [FETCH_EMAIL_LIST_FAIL]: state => ({ ...state, score: false }),
  [FETCH_SCORE]: state => ({ ...state, score: true }),
  [FETCH_SCORE_SUCCESS]: state => ({ ...state, score: false }),
  [FETCH_SCORE_FAIL]: state => ({ ...state, score: false }),
}, initalState);

export default reducer;

