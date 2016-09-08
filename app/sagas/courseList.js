import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import { ToastAndroid } from 'react-native';
import HTMLParser from 'fast-html-parser';
import api from '../utils/api';
import { FETCH_COURSE_LIST } from '../containers/App/actionTypes';
import {
  fetchCourseListSuccess,
  fetchCourseListFail,
} from '../containers/App/actions';

function* fetchCourseList() {
  try {
    const html = yield call(api.get, '/home.php');
    const root = HTMLParser.parse(html);
    const mnuItems = root.querySelectorAll('.mnuItem a');
    const courseUrlRegex = /^\/course\/(\d+)$/;
    const courseList = mnuItems.filter((item) => (
      courseUrlRegex.test(item.attributes.href)
    ))
    .map((item) => ({
      id: item.attributes.href.match(courseUrlRegex)[1],
      name: item.text,
    }));
    yield put(fetchCourseListSuccess(courseList));
  } catch (error) {
    ToastAndroid.show('無法取得課程列表', ToastAndroid.SHORT);
    yield put(fetchCourseListFail(error));
  }
}

function* watchFetchCourseList() {
  yield* takeEvery(FETCH_COURSE_LIST, fetchCourseList);
}

export default function* courseListSaga() {
  yield fork(watchFetchCourseList);
}

