import {
  FETCH_TIMETABLE,
  FETCH_TIMETABLE_SUCCESS,
  FETCH_TIMETABLE_FAIL,
} from './actionTypes';

export const fetchTimetable = () => ({ type: FETCH_TIMETABLE });

export const fetchTimetableSuccess = (timetable) => ({
  type: FETCH_TIMETABLE_SUCCESS,
  timetable,
});

export const fetchTimetableFail = error => ({
  type: FETCH_TIMETABLE_FAIL,
  error,
});

