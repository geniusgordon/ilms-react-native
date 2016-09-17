import {
  FETCH_COURSE_LIST,
  FETCH_COURSE_LIST_SUCCESS,
  FETCH_COURSE_LIST_FAIL,
} from './actionTypes';

export const fetchCourseList = () => ({ type: FETCH_COURSE_LIST });

export const fetchCourseListSuccess = courseList => ({
  type: FETCH_COURSE_LIST_SUCCESS,
  courseList,
});

export const fetchCourseListFail = error => ({
  type: FETCH_COURSE_LIST_FAIL,
  error,
});

