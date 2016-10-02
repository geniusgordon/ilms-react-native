import { handleActions } from 'redux-actions';
import {
  FETCH_TIMETABLE,
  FETCH_TIMETABLE_SUCCESS,
  FETCH_TIMETABLE_FAIL,
} from './actionTypes';

const initalState = {
  loading: false,
};

const reducer = handleActions({
  [FETCH_TIMETABLE]: state => ({
    ...state,
    loading: true,
  }),
  [FETCH_TIMETABLE_SUCCESS]: state => ({
    ...state,
    loading: false,
  }),
  [FETCH_TIMETABLE_FAIL]: state => ({
    ...state,
    loading: false,
  }),
}, initalState);

export default reducer;

