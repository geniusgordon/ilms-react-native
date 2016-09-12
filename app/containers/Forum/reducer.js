import { handleActions } from 'redux-actions';
import {
  FETCH_FORUM,
  FETCH_FORUM_SUCCESS,
  FETCH_FORUM_FAIL,
} from './actionTypes';

const initalState = {
  loading: false,
};

const reducer = handleActions({
  [FETCH_FORUM]: (state) => ({
    ...state,
    loading: true,
  }),
  [FETCH_FORUM_SUCCESS]: (state) => ({
    ...state,
    loading: false,
  }),
  [FETCH_FORUM_FAIL]: (state) => ({
    ...state,
    loading: false,
  }),
}, initalState);

export default reducer;

