import {
  FETCH_EMAIL_LIST,
  FETCH_EMAIL_LIST_SUCCESS,
  FETCH_EMAIL_LIST_FAIL,
} from './actionTypes';

export const fetchEmailList = courseId => ({
  type: FETCH_EMAIL_LIST,
  courseId,
});

export const fetchEmailListSuccess = (courseId, emailList) => ({
  type: FETCH_EMAIL_LIST_SUCCESS,
  courseId,
  emailList,
});

export const fetchEmailListFail = error => ({
  type: FETCH_EMAIL_LIST_FAIL,
  error,
});

