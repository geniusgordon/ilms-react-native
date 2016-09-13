import { combineReducers } from 'redux';
import courseById from './courseById';
import courseList from './courseList';
import itemsById from './itemsById';
import loading from './loading';

const reducer = combineReducers({
  courseById,
  courseList,
  itemsById,
  loading,
});

export default reducer;

