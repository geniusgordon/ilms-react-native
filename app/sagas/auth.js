import { call, fork, put, take } from 'redux-saga/effects';
import api from '../utils/api';
import { LOGIN, LOGOUT } from '../containers/Auth/actionTypes';
import {
  loginSuccess,
  loginFail,
  loginError,
} from '../containers/Auth/actions';

function* loginFlow() {
  while (true) { // eslint-disable-line no-constant-condition
    const { account, password } = yield take(LOGIN);
    try {
      const data = {
        account,
        password,
        secCode: 'na',
        stay: 1,
      };
      const result = yield call(api.post, '/sys/lib/ajax/login_submit.php', data);
      const { ret } = JSON.parse(result);
      if (ret.status === 'true') {
        yield put(loginSuccess(ret.email));
        yield take(LOGOUT);
      } else {
        yield put(loginFail(ret.msg));
      }
    } catch (error) {
      yield put(loginError(error));
    }
  }
}

export default function* authSaga() {
  yield fork(loginFlow);
}

