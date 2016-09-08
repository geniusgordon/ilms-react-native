import { handleActions } from 'redux-actions';
import { FETCH_COURSE_LIST_SUCCESS } from '../actions/actionTypes';

const initalState = {
  current: [],
};

const reducer = handleActions({
  [FETCH_COURSE_LIST_SUCCESS]: (state, { courseList }) => ({
    current: courseList.map(({ id }) => id),
  }),
}, initalState);

export default reducer;

