import { handleActions } from 'redux-actions';
import {
  FETCH_COURSE_LIST_SUCCESS,
  FETCH_ITEM_LIST_SUCCESS,
} from '../actions/actionTypes';

const initalState = {};

const reducer = handleActions({
  [FETCH_COURSE_LIST_SUCCESS]: (state, { courseList }) => {
    const byId = courseList.reduce((reduction, course) => ({
      ...reduction,
      [course.id]: {
        ...state[course.id],
        ...course,
      },
    }), state);
    return byId;
  },
  [FETCH_ITEM_LIST_SUCCESS]: (state, { courseId, courseName, itemType, itemList }) => ({
    ...state,
    [courseId]: {
      ...state[courseId],
      name: courseName,
      [itemType]: itemList.map((item) => item.id),
    },
  }),
}, initalState);

export default reducer;

