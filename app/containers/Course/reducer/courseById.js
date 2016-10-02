import { handleActions } from 'redux-actions';
import {
  FETCH_COURSE_LIST_SUCCESS,
  FETCH_ITEM_LIST_SUCCESS,
  FETCH_EMAIL_LIST_SUCCESS,
  FETCH_SCORE_SUCCESS,
} from '../actions/actionTypes';
import {
  FETCH_TIMETABLE_SUCCESS,
} from '../../Timetable/actionTypes';

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
  [FETCH_ITEM_LIST_SUCCESS]: (state, { course, itemType, itemList, params }) => {
    const newList = {
      page: 1,
      more: itemList.length > 0,
      data: itemList.map(item => item.id),
    };
    if (params && params.page > 1) {
      const oldList = state[course.id][itemType];
      newList.page = params.page;
      newList.data = [...oldList.data, ...newList.data];
    }
    return {
      ...state,
      [course.id]: {
        ...state[course.id],
        name: course.name,
        [itemType]: newList,
      },
    };
  },
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
  [FETCH_TIMETABLE_SUCCESS]: (state, { timetable }) => {
    const byId = timetable.reduce((reduction, course) => ({
      ...reduction,
      [course.id]: {
        ...state[course.id],
        ...course,
      },
    }), state);
    return byId;
  },
}, initalState);

export default reducer;

