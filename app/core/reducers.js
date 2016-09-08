import { combineReducers } from 'redux';
import authReducer from '../containers/Auth/reducer';

export default combineReducers({
  auth: authReducer,
});

