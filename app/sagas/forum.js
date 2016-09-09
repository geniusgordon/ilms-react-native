import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import { ToastAndroid } from 'react-native';
import api from '../utils/api';
import { parseForum } from '../utils/parser';
import { FETCH_FORUM } from '../containers/Forum/actionTypes';
import {
  fetchForumSuccess,
  fetchForumFail,
} from '../containers/Forum/actions';

function* fetchForum({ forumId }) {
  try {
    const html = yield call(api.post, '/sys/lib/ajax/post.php', { id: forumId });
    const forum = parseForum(html);
    yield put(fetchForumSuccess(forum));
  } catch (error) {
    console.log(error);
    ToastAndroid.show('無法載入', ToastAndroid.SHORT);
    yield put(fetchForumFail(error));
  }
}

function* watchFetchForum() {
  yield* takeEvery(FETCH_FORUM, fetchForum);
}

export default function* itemDetailSaga() {
  yield fork(watchFetchForum);
}

