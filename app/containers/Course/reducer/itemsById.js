import { handleActions } from 'redux-actions';
import { FETCH_ITEM_LIST_SUCCESS } from '../actions/actionTypes';

const initalState = {
  announcement: {},
  material: {},
  assignment: {},
};

const reducer = handleActions({
  [FETCH_ITEM_LIST_SUCCESS]: (state, { itemType, itemList }) => {
    const byId = itemList.reduce((reduction, item) => ({
      ...reduction,
      [item.id]: {
        ...state[itemType][item.id],
        item,
      },
    }), state[itemType]);
    return {
      ...state,
      [itemType]: byId,
    };
  },
}, initalState);

export default reducer;

