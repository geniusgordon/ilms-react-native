import { handleActions } from 'redux-actions';
import {
  FETCH_FORUM,
  FETCH_FORUM_SUCCESS,
  FETCH_FORUM_FAIL,
} from './actionTypes';

const initalState = {
  loading: false,
  refreshing: false,
};

const reducer = handleActions({
  [FETCH_FORUM]: (state, { params }) => {
    if (params && params.refresh) {
      return { ...state, refreshing: true };
    }
    return { ...state, loading: true };
  },
  [FETCH_FORUM_SUCCESS]: state => ({
    ...state,
    loading: false,
    refreshing: false,
  }),
  [FETCH_FORUM_FAIL]: state => ({
    ...state,
    loading: false,
    refreshing: false,
  }),
}, initalState);

export default reducer;

