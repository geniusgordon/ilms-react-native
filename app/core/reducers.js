import { combineReducers } from 'redux';
import auth from '../containers/Auth/reducer';
import course from '../containers/Course/reducer';

export default combineReducers({
  auth,
  course,
});

