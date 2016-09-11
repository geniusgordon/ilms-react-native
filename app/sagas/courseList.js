import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import { ToastAndroid } from 'react-native';
import api from '../utils/api';
import { parseCourseList } from '../utils/parser';
import { FETCH_COURSE_LIST } from '../containers/Course/actions/actionTypes';
import {
  fetchCourseListSuccess,
  fetchCourseListFail,
} from '../containers/Course/actions/courseList';

function* fetchCourseList() {
  try {
    const res = yield call(api.get, '/home.php');
    const html = yield res.text();
    const courseList = parseCourseList(html);
    yield put(fetchCourseListSuccess(courseList));
  } catch (error) {
    ToastAndroid.show('無法取得課程列表', ToastAndroid.SHORT);
    yield put(fetchCourseListFail(error.message));
  }
}

function* watchFetchCourseList() {
  yield* takeEvery(FETCH_COURSE_LIST, fetchCourseList);
}

export default function* courseListSaga() {
  yield fork(watchFetchCourseList);
}

