import {
  FETCH_LATEST_NEWS,
  FETCH_LATEST_NEWS_SUCCESS,
  FETCH_LATEST_NEWS_FAIL,
} from './actionTypes';

export const fetchLatestNews = (params) => ({
  type: FETCH_LATEST_NEWS,
  params,
});

export const fetchLatestNewsSuccess = (latestNews) => ({
  type: FETCH_LATEST_NEWS_SUCCESS,
  latestNews,
});

export const fetchLatestNewsFail = (error) => ({
  type: FETCH_LATEST_NEWS_FAIL,
  error,
});

