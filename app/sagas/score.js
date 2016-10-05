import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import api from '../utils/api';
import alert from '../utils/alert';
import { parseScore } from '../utils/parser';
import { FETCH_SCORE } from '../containers/Course/actions/actionTypes';
import {
  fetchScoreSuccess,
  fetchScoreFail,
} from '../containers/Course/actions/score';

function* fetchScore({ courseId }) {
  try {
    const res = yield call(api.get, '/course.php', {
      courseID: courseId,
      f: 'score',
    });
    const html = yield res.text();
    const score = parseScore(html);
    yield put(fetchScoreSuccess(courseId, score));
  } catch (error) {
    alert('無法載入成績');
    yield put(fetchScoreFail(error.message));
  }
}

export default function* scoreSaga() {
  yield takeEvery(FETCH_SCORE, fetchScore);
}

