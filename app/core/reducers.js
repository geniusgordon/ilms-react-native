import { combineReducers } from 'redux';
import home from '../containers/Home/reducer';
import auth from '../containers/Auth/reducer';
import course from '../containers/Course/reducer';

export default combineReducers({
  home,
  auth,
  course,
});

