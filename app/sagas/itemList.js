import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import api from '../utils/api';
import alert from '../utils/alert';
import {
  parseCourseNameTitle,
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

function* fetchItemList({ courseId, itemType, params }) {
  try {
    const res = yield call(api.get, '/course.php', {
      ...params,
      courseID: courseId,
      f: itemUrlParams[itemType],
    });
    const html = yield res.text();
    const courseName = parseCourseNameTitle(html);
    const course = { id: courseId, name: courseName };
    const itemList = parseItemList(itemType, html);
    yield put(fetchItemListSuccess(course, itemType, itemList, params));
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

