import { takeEvery } from 'redux-saga';
import { call, fork, put, take } from 'redux-saga/effects';
import { ToastAndroid } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import api from '../utils/api';
import {
  CHECK_LOGIN,
  LOGIN,
  LOGOUT,
} from '../containers/Auth/actionTypes';
import {
  loginSuccess,
  loginFail,
  loginError,
} from '../containers/Auth/actions';

function* checkLogin() {
  const home = yield call(api.get, '/home.php');
  if (home.indexOf('權限不足') !== -1) {
    ToastAndroid.show('尚未登入', ToastAndroid.SHORT);
    Actions.login({ type: ActionConst.REPLACE });
  }
}

function* watchCheckLogin() {
  yield* takeEvery(CHECK_LOGIN, checkLogin);
}

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
        Actions.home({ type: ActionConst.REPLACE });
        yield take(LOGOUT);
        yield call(api.post, '/sys/lib/ajax/logout.php');
      } else {
        ToastAndroid.show(ret.msg, ToastAndroid.SHORT);
        yield put(loginFail(ret.msg));
      }
    } catch (error) {
        ToastAndroid.show('登入失敗', ToastAndroid.SHORT);
      yield put(loginError(error));
    }
  }
}

export default function* authSaga() {
  yield fork(watchCheckLogin);
  yield fork(loginFlow);
}

