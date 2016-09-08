import { handleActions } from 'redux-actions';

const initalState = {
  announcements: [{
    id: 997746,
    title: 'HW2 & HW3 re-demo',
    date: '2016-06-16 18:00',
  }, {
    id: 993015,
    title: 'Final Project Demo',
    date: '06-11 13:40',
  }],
  materials: [],
  assignments: [],
};

const reducer = handleActions({}, initalState);

export default reducer;

