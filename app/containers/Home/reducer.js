import { handleActions } from 'redux-actions';
import {
  FETCH_LATEST_NEWS,
  FETCH_LATEST_NEWS_SUCCESS,
  FETCH_LATEST_NEWS_FAIL,
} from './actionTypes';

const initalState = {
  latestNews: [],
  loading: false,
};

const reducer = handleActions({
  [FETCH_LATEST_NEWS]: (state) => ({
    ...state,
    loading: true,
  }),
  [FETCH_LATEST_NEWS_SUCCESS]: (state, { latestNews }) => ({
    ...state,
    latestNews,
    loading: false,
  }),
  [FETCH_LATEST_NEWS_FAIL]: () => ({
    loading: false,
  }),
}, initalState);

export default reducer;

