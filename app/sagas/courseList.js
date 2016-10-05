import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import api from '../utils/api';
import alert from '../utils/alert';
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
    alert('無法取得課程列表');
    yield put(fetchCourseListFail(error.message));
  }
}

export default function* courseListSaga() {
  yield takeEvery(FETCH_COURSE_LIST, fetchCourseList);
}

