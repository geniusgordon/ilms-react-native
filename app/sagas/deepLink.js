import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { ActionConst } from 'react-native-router-flux';
import urlParse from 'url-parse';
import { DEEP_LINK } from '../containers/App/actionTypes';
import { route } from '../containers/App/actions';

function* course(urlObject) {
  if (urlObject.pathname.match(/\/course\/(\d+)/)) {
    yield put(route('course', {
      id: urlObject.pathname.match(/\/course\/(\d+)/)[1],
    }));
    return;
  }
  if (urlObject.pathname !== '/course.php') {
    return;
  }
  if (!urlObject.query.courseID) {
    return;
  }
  const f = ['activity', 'doclist', 'forumlist', 'hwlist'];
  if (f.indexOf(urlObject.query.f) !== -1) {
    yield put(route('course', {
      type: ActionConst.REPLACE,
      id: urlObject.query.courseID,
      f: urlObject.query.f,
    }));
  }
}

function* detail(urlObject) {
  if (urlObject.pathname !== '/course.php') {
    return;
  }
  if (!urlObject.query.courseID) {
    return;
  }
  const f = {
    assignment: ['hw', 'hw_doclist', 'nohwlist'],
    material: ['doc'],
  };
  const courseId = urlObject.query.courseID;
  let itemType;
  let itemId;
  if (f.assignment.indexOf(urlObject.query.f) !== -1) {
    itemType = 'assignment';
    itemId = urlObject.query.hw;
  }
  if (f.material.indexOf(urlObject.query.f) !== -1) {
    itemType = 'material';
    itemId = urlObject.query.cid;
  }
  if (itemType) {
    yield put(route('detail', {
      type: ActionConst.REPLACE,
      itemType,
      courseId,
      itemId,
    }));
  }
}

function* forumDetail(urlObject) {
  if (urlObject.pathname !== '/course.php') {
    return;
  }
  if (!urlObject.query.courseID || !urlObject.query.tid) {
    return;
  }
  if (urlObject.query.f !== 'forum') {
    return;
  }
  yield put(route('forum', {
    type: ActionConst.REPLACE,
    courseId: urlObject.query.courseID,
    id: urlObject.query.tid,
  }));
}

function* deepLink({ url }) {
  const urlObject = urlParse(url, true);
  yield call(course, urlObject);
  yield call(detail, urlObject);
  yield call(forumDetail, urlObject);
}

export default function* deepLinkSaga() {
  yield takeEvery(DEEP_LINK, deepLink);
}

