import { takeEvery } from 'redux-saga';
import { call, fork, put, take } from 'redux-saga/effects';
import { AsyncStorage, ToastAndroid } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import api from '../utils/api';
import { parseProfile } from '../utils/parser';
import {
  CHECK_LOGIN,
  LOGIN,
  LOGOUT,
} from '../containers/Auth/actionTypes';
import {
  checkLoginSuccess,
  loginSuccess,
  loginFail,
  loginError,
  fetchProfileSuccess,
} from '../containers/Auth/actions';
import { fetchCourseList } from '../containers/Course/actions/courseList';

function* checkLogin() {
  const cookie = yield AsyncStorage.getItem('cookie');
  const res = yield call(api.get, '/home/profile.php');
  const home = yield res.text();
  if (!cookie || home.indexOf('權限不足') !== -1) {
    ToastAndroid.show('尚未登入', ToastAndroid.SHORT);
    Actions.login({ type: ActionConst.REPLACE });
    return;
  }
  yield put(checkLoginSuccess(cookie));

  const user = parseProfile(home);
  yield put(fetchProfileSuccess(user));
  yield put(fetchCourseList());
}

function* watchCheckLogin() {
  yield* takeEvery(CHECK_LOGIN, checkLogin);
}

function* login({ account, password }) {
  try {
    const data = {
      account,
      password,
      secCode: 'na',
      stay: 1,
    };
    const res = yield call(api.post, '/sys/lib/ajax/login_submit.php', data);
    const { ret } = yield res.json();
    if (ret.status === 'true') {
      const cookie = res.headers.map['set-cookie'][0];
      yield put(loginSuccess({
        email: ret.email,
        cookie,
      }));
      yield AsyncStorage.setItem('cookie', cookie);
      Actions.home({ type: ActionConst.REPLACE });

      yield take(LOGOUT);
      yield AsyncStorage.removeItem('cookie');
    } else {
      ToastAndroid.show(ret.msg, ToastAndroid.SHORT);
      yield put(loginFail(ret.msg));
    }
  } catch (error) {
    ToastAndroid.show('登入失敗', ToastAndroid.SHORT);
    yield put(loginError(error.message));
  }
}

function* watchLogin() {
  yield* takeEvery(LOGIN, login);
}

function* logout() {
  yield call(api.post, '/sys/lib/ajax/logout.php');
  Actions.login({ type: ActionConst.REPLACE });
}

function* watchLogout() {
  yield* takeEvery(LOGOUT, logout);
}

export default function* authSaga() {
  yield fork(watchCheckLogin);
  yield fork(watchLogin);
  yield fork(watchLogout);
}

