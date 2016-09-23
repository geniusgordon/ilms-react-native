import { handleActions } from 'redux-actions';
import { CHECK_UPDATE_SUCCESS } from './actionTypes';

const initalState = {
  needUpdate: false,
  version: '2.5.0',
};

const reducer = handleActions({
  [CHECK_UPDATE_SUCCESS]: (state, { needUpdate }) => ({
    ...state,
    needUpdate,
  }),
}, initalState);

export default reducer;

