import { combineReducers } from 'redux';
import courseById from './courseById';
import courseList from './courseList';
import itemsById from './itemsById';

const reducer = combineReducers({
  courseById,
  courseList,
  itemsById,
});

export default reducer;

