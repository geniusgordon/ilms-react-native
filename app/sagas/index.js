import { fork } from 'redux-saga/effects';
import authSaga from './auth';

export default function* rootSaga() {
  yield fork(authSaga);
}

