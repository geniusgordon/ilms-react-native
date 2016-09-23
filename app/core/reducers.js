import { combineReducers } from 'redux';
import app from '../containers/App/reducer';
import home from '../containers/Home/reducer';
import auth from '../containers/Auth/reducer';
import course from '../containers/Course/reducer';
import forum from '../containers/Forum/reducer';

export default combineReducers({
  app,
  home,
  auth,
  course,
  forum,
});

