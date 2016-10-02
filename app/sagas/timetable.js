import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import { FETCH_TIMETABLE } from '../containers/Timetable/actionTypes';
import {
  fetchTimetableSuccess,
  fetchTimetableFail,
} from '../containers/Timetable/actions';

const colors = [
  '#ef9a9a', // red
  '#ffcc80', // orange
  '#fff59d', // yellow
  '#a5d6a7', // green
  '#80cbc4', // teal
  '#80deea', // cyan
  '#9fa8da', // indigo
  '#ce93d8', // purple
  '#bcaaa4', // brown
  '#b0bec5', // grey
];

function getCourseList(store) {
  const state = store.getState();
  const { courseById, courseList } = state.course;
  return courseList.current.map(id => courseById[id]);
}

function* fetchCourseTime(course, i) {
  const res = yield call(fetch, `http://nthu-course.cf/search/?q=${course.courseId}`);
  const json = yield res.json();
  const { room, time } = json.courses[0];
  return {
    ...course,
    room,
    time,
    color: colors[i],
  };
}

function* fetchTimetable(store) {
  try {
    const courseList = getCourseList(store);
    const timetable = yield courseList.map((course, i) => call(fetchCourseTime, course, i));
    yield put(fetchTimetableSuccess(timetable));
  } catch (error) {
    yield put(fetchTimetableFail(error.message));
  }
}

function* watchFetchTimetable(store) {
  yield* takeEvery(FETCH_TIMETABLE, fetchTimetable, store);
}

export default function* checkUpdateSaga(store) {
  yield fork(watchFetchTimetable, store);
}

