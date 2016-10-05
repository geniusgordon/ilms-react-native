import { takeEvery } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import GoogleAnalytics from 'react-native-google-analytics-bridge';
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
import checkUpdateSaga from './checkUpdate';
import timetableSaga from './timetable';

function route({ key, params }) {
  if (Actions[key]) {
    Actions[key](params);
    GoogleAnalytics.trackEvent('route', key, {
      label: JSON.stringify(params),
    });
  }
}

export default function* rootSaga(store) {
  yield [
    fork(homeSaga),
    fork(authSaga),
    fork(courseListSaga),
    fork(itemListSaga),
    fork(itemDetailSaga),
    fork(forumSaga, store),
    fork(deepLinkSaga),
    fork(emailListSaga),
    fork(scoreSaga),
    fork(checkUpdateSaga, store),
    fork(timetableSaga, store),
    takeEvery(ROUTE, route),
  ];
}

