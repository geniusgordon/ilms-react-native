import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import { ToastAndroid, Alert, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import api from '../utils/api';
import { parseForum } from '../utils/parser';
import {
  FETCH_FORUM,
  SEND_POST,
} from '../containers/Forum/actionTypes';
import {
  fetchForumSuccess,
  fetchForumFail,
} from '../containers/Forum/actions';
import { fetchItemList } from '../containers/Course/actions/itemList';

function* fetchForum({ forumId }) {
  try {
    const res = yield call(api.post, '/sys/lib/ajax/post.php', { id: forumId });
    const json = yield res.json();
    const forum = parseForum(json.posts);
    yield put(fetchForumSuccess(forum));
  } catch (error) {
    if(Platform.OS === 'android')
      ToastAndroid.show('無法載入', ToastAndroid.SHORT);
    else
      Alert.alert('無法載入');
    yield put(fetchForumFail(error.message));
  }
}

function* watchFetchForum() {
  yield* takeEvery(FETCH_FORUM, fetchForum);
}

function* sendPost(store, { action, courseId, postId, post }) {
  try {
    yield call(api.post, '/sys/http_check_priv.php', {
      courseID: courseId,
      privs: 'a',
    });
    yield call(api.postMultipart, '/post_insert.php', {
      fmSubmit: 'yes',
      action,
      courseID: courseId,
      id: postId,
      fmTitle: post.title,
      fmNickname: post.name,
      fmEmail: store.getState().auth.email,
      fmNote: post.content,
      MAX_FILE_SIZE: '104857600',
      hint: '0',
    });
    if (action === 'reply') {
      yield call(fetchForum, { forumId: postId });
    } else {
      yield put(fetchItemList(courseId, 'forum'));
    }
    Actions.pop();
  } catch (error) {
    //
  }
}

function* watchSendPost(store) {
  yield* takeEvery(SEND_POST, sendPost, store);
}

export default function* forumSaga(store) {
  yield fork(watchFetchForum);
  yield fork(watchSendPost, store);
}

