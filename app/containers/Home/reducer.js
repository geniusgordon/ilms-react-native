import { handleActions } from 'redux-actions';
import { FETCH_LATEST_NEWS_SUCCESS } from './actionTypes';

const initalState = {
  latestNews: [],
};

const reducer = handleActions({
  [FETCH_LATEST_NEWS_SUCCESS]: (state, { latestNews }) => ({
    ...state,
    latestNews,
  }),
}, initalState);

export default reducer;

