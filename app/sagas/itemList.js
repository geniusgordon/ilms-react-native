import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import { ToastAndroid } from 'react-native';
import api from '../utils/api';
import {
  parseCourseName,
  parseItemList,
} from '../utils/parser';
import { FETCH_ITEM_LIST } from '../containers/Course/actions/actionTypes';
import {
  fetchItemListSuccess,
  fetchItemListFail,
} from '../containers/Course/actions/itemList';

const itemUrlParams = {
  announcement: 'news',
  material: 'doclist',
  assignment: 'hwlist',
};

function* fetchItemList({ courseId, itemType }) {
  try {
    const html = yield call(api.get, '/course.php', {
      courseID: courseId,
      f: itemUrlParams[itemType],
    });
    const courseName = parseCourseName(html);
    const itemList = parseItemList(itemType, html);
    yield put(fetchItemListSuccess(courseId, courseName, itemType, itemList));
  } catch (error) {
    ToastAndroid.show('無法載入課程', ToastAndroid.SHORT);
    yield put(fetchItemListFail(courseId, itemType, error));
  }
}

function* watchFetchItemList() {
  yield* takeEvery(FETCH_ITEM_LIST, fetchItemList);
}

export default function* itemListSaga() {
  yield fork(watchFetchItemList);
}

