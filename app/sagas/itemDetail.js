import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import { ToastAndroid } from 'react-native';
import api from '../utils/api';
import {
  parseItemDetail,
} from '../utils/parser';
import { FETCH_ITEM_DETAIL } from '../containers/Course/actions/actionTypes';
import {
  fetchItemDetailSuccess,
  fetchItemDetailFail,
} from '../containers/Course/actions/itemDetail';

const fetchItemFunc = {
  announcement(courseId, itemId) {
    return api.post('/home/http_event_select.php', {
      id: itemId,
      type: 'n',
    });
  },
  material(courseId, itemId) {
    return api.get('/course.php', {
      courseID: courseId,
      f: 'doc',
      cid: itemId,
    });
  },
  assignment(courseId, itemId) {
    return api.get('/course.php', {
      courseID: courseId,
      f: 'hw',
      hw: itemId,
    });
  },
};

function* fetchItemDetail({ courseId, itemType, itemId }) {
  try {
    const res = yield call(fetchItemFunc[itemType], courseId, itemId);
    const html = yield res.text();
    const item = parseItemDetail(itemType, html);
    yield put(fetchItemDetailSuccess(itemType, itemId, item));
  } catch (error) {
    ToastAndroid.show('無法載入', ToastAndroid.SHORT);
    yield put(fetchItemDetailFail(itemType, itemId, error.message));
  }
}

function* watchFetchItemDetail() {
  yield* takeEvery(FETCH_ITEM_DETAIL, fetchItemDetail);
}

export default function* itemDetailSaga() {
  yield fork(watchFetchItemDetail);
}

