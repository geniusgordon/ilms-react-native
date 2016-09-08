import { combineReducers } from 'redux';
import app from '../containers/App/reducer';
import auth from '../containers/Auth/reducer';
import course from '../containers/Course/reducer';

export default combineReducers({
  app,
  auth,
  course,
});

