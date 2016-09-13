import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import api from '../utils/api';
import alert from '../utils/alert';
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
  forum: 'forumlist',
};

function* fetchItemList({ courseId, itemType }) {
  try {
    const res = yield call(api.get, '/course.php', {
      courseID: courseId,
      f: itemUrlParams[itemType],
    });
    const html = yield res.text();
    const courseName = parseCourseName(html);
    const itemList = parseItemList(itemType, html);
    yield put(fetchItemListSuccess(courseId, courseName, itemType, itemList));
  } catch (error) {
    alert('無法載入課程');
    yield put(fetchItemListFail(courseId, itemType, error.message));
  }
}

function* watchFetchItemList() {
  yield* takeEvery(FETCH_ITEM_LIST, fetchItemList);
}

export default function* itemListSaga() {
  yield fork(watchFetchItemList);
}

