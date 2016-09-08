import { combineReducers } from 'redux';
import appReducer from '../containers/App/reducer';
import authReducer from '../containers/Auth/reducer';

export default combineReducers({
  app: appReducer,
  auth: authReducer,
});

