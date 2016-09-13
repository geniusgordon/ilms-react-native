import { handleActions } from 'redux-actions';
import {
  FETCH_COURSE_LIST_SUCCESS,
  FETCH_ITEM_LIST_SUCCESS,
  FETCH_EMAIL_LIST_SUCCESS,
  FETCH_SCORE_SUCCESS,
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
  [FETCH_EMAIL_LIST_SUCCESS]: (state, { courseId, emailList }) => ({
    ...state,
    [courseId]: {
      ...state[courseId],
      emailList,
    },
  }),
  [FETCH_SCORE_SUCCESS]: (state, { courseId, scoreList }) => ({
    ...state,
    [courseId]: {
      ...state[courseId],
      scoreList,
    },
  }),
}, initalState);

export default reducer;

