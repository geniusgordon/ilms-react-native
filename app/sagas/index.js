import { takeEvery } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import { ROUTE } from '../containers/App/actionTypes';
import homeSaga from './home';
import authSaga from './auth';
import courseListSaga from './courseList';
import itemListSaga from './itemList';
import itemDetailSaga from './itemDetail';
import forumSaga from './forum';
import deepLinkSaga from './deepLink';
import emailListSaga from './emailList';
import scoreSaga from './score';

function route({ key, params }) {
  if (Actions[key]) {
    Actions[key](params);
    GoogleAnalytics.trackEvent('route', key, {
      value: JSON.stringify(params),
    });
  }
}

function* watchRoute() {
  yield* takeEvery(ROUTE, route);
}

export default function* rootSaga(store) {
  yield fork(watchRoute);
  yield fork(homeSaga);
  yield fork(authSaga);
  yield fork(courseListSaga);
  yield fork(itemListSaga);
  yield fork(itemDetailSaga);
  yield fork(forumSaga, store);
  yield fork(deepLinkSaga);
  yield fork(emailListSaga);
  yield fork(scoreSaga);
}

