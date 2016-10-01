import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import api from '../utils/api';
import { FETCH_TIMETABLE } from '../containers/Timetable/actionTypes';
import {
  fetchTimetableSuccess,
  fetchTimetableFail,
} from '../containers/Timetable/actions';

function getCourseList(store) {
  const state = store.getState();
  const { courseById, courseList }  = state.course;
  return courseList.current.map(id => courseById[id]);
}

function* fetchCourseTime(course) {
  const res = yield call(fetch, `http://nthu-course.cf/search/?q=${course.courseId}`);
  const json = yield res.json();
  const { room, time } = json.courses[0];
  return {
    ...course,
    room,
    time,
  };
}

function* fetchTimetable(store) {
  try {
    const courseList = getCourseList(store);
    const timetable = yield courseList.map(course => call(fetchCourseTime, course));
    yield put(fetchTimetableSuccess(timetable));
  } catch (error) {
    console.log(error);
    yield put(fetchTimetableFail(error.message));
  }
}

function* watchFetchTimetable(store) {
  yield* takeEvery(FETCH_TIMETABLE, fetchTimetable, store);
}

export default function* checkUpdateSaga(store) {
  yield fork(watchFetchTimetable, store);
}

