import { takeEvery } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import { Actions, ActionConst } from 'react-native-router-flux';
import api from '../utils/api';
import alert from '../utils/alert';
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
  const { isLogin, html } = yield call(api.checkLogin);
  if (!isLogin) {
    alert('尚未登入');
    Actions.login({ type: ActionConst.REPLACE });
    return;
  }
  yield put(checkLoginSuccess());

  const user = parseProfile(html);
  yield put(fetchProfileSuccess(user));
  yield put(fetchCourseList());
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
      yield put(loginSuccess({
        email: ret.email,
      }));
      Actions.home({ type: ActionConst.REPLACE });

      yield take(LOGOUT);
    } else {
      alert(ret.msg);
      yield put(loginFail(ret.msg));
    }
  } catch (error) {
    alert('登入失敗');
    yield put(loginError(error.message));
  }
}

function* logout() {
  yield call(api.post, '/sys/lib/ajax/logout.php');
  Actions.login({ type: ActionConst.REPLACE });
}

export default function* authSaga() {
  yield [
    takeEvery(CHECK_LOGIN, checkLogin),
    takeEvery(LOGIN, login),
    takeEvery(LOGOUT, logout),
  ];
}

