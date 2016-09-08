import { fork } from 'redux-saga/effects';
import authSaga from './auth';
import courseListSaga from './courseList';

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(courseListSaga);
}

