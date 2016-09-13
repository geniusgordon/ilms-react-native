import {
  FETCH_SCORE,
  FETCH_SCORE_SUCCESS,
  FETCH_SCORE_FAIL,
} from './actionTypes';

export const fetchScore = (courseId) => ({
  type: FETCH_SCORE,
  courseId,
});

export const fetchScoreSuccess = (courseId, scoreList) => ({
  type: FETCH_SCORE_SUCCESS,
  courseId,
  scoreList,
});

export const fetchScoreFail = (error) => ({
  type: FETCH_SCORE_FAIL,
  error,
});

