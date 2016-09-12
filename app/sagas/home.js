import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import { ToastAndroid, Alert, Platform } from 'react-native';
import api from '../utils/api';
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
    if(Platform.OS === 'android')
      ToastAndroid.show('無法載入最新公吉', ToastAndroid.SHORT);
    else
      Alert.alert('無法載入最新公吉');
    yield put(fetchLatestNewsFail(error.message));
  }
}

function* watchFetchLatestNews() {
  yield* takeEvery(FETCH_LATEST_NEWS, fetchLatestNews);
}

export default function* homeSaga() {
  yield fork(watchFetchLatestNews);
}

