import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import api from '../utils/api';
import alert from '../utils/alert';
import { parseLatestNews } from '../utils/parser';
import {
  FETCH_LATEST_NEWS,
} from '../containers/Home/actionTypes';
import {
  fetchLatestNewsSuccess,
  fetchLatestNewsFail,
} from '../containers/Home/actions';

function* fetchLatestNews() {
  try {
    const res = yield call(api.get, '/home.php');
    const html = yield res.text();
    const latestNews = parseLatestNews(html);
    yield put(fetchLatestNewsSuccess(latestNews));
  } catch (error) {
    alert('無法載入最新公吉');
    yield put(fetchLatestNewsFail(error.message));
  }
}

export default function* homeSaga() {
  yield takeEvery(FETCH_LATEST_NEWS, fetchLatestNews);
}

