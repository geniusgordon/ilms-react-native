import { handleActions } from 'redux-actions';
import {
  FETCH_LATEST_NEWS,
  FETCH_LATEST_NEWS_SUCCESS,
  FETCH_LATEST_NEWS_FAIL,
} from './actionTypes';

const initalState = {
  latestNews: [],
  loading: false,
  refreshing: false,
};

const reducer = handleActions({
  [FETCH_LATEST_NEWS]: (state, { params }) => {
    if (params && params.refresh) {
      return { ...state, refreshing: true };
    }
    return { ...state, loading: true };
  },
  [FETCH_LATEST_NEWS_SUCCESS]: (state, { latestNews }) => ({
    ...state,
    latestNews,
    loading: false,
    refreshing: false,
  }),
  [FETCH_LATEST_NEWS_FAIL]: () => ({
    loading: false,
    refreshing: false,
  }),
}, initalState);

export default reducer;

