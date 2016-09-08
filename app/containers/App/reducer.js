import { handleActions } from 'redux-actions';
import { FETCH_COURSE_LIST_SUCCESS } from './actionTypes';

const initalState = {
  courseList: [],
};

const reducer = handleActions({
  [FETCH_COURSE_LIST_SUCCESS]: (state, { courseList }) => ({
    ...state,
    courseList,
  }),
}, initalState);

export default reducer;

