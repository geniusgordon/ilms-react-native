import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import api from '../utils/api';
import alert from '../utils/alert';
import { parseEmailList } from '../utils/parser';
import {
  FETCH_EMAIL_LIST,
} from '../containers/Course/actions/actionTypes';
import {
  fetchEmailListSuccess,
  fetchEmailListFail,
} from '../containers/Course/actions/emailList';

function* fetchEmailList({ courseId }) {
  try {
    const res = yield call(api.get, `/course/${courseId}`);
    const html = yield res.text();
    const emailList = parseEmailList(html);
    yield put(fetchEmailListSuccess(courseId, emailList));
  } catch (error) {
    alert('無法載入課程信箱');
    yield put(fetchEmailListFail(error.message));
  }
}

function* watchFetchEmailList() {
  yield* takeEvery(FETCH_EMAIL_LIST, fetchEmailList);
}

export default function* emailListSaga() {
  yield fork(watchFetchEmailList);
}

