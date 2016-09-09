import { handleActions } from 'redux-actions';
import {
  FETCH_ITEM_LIST_SUCCESS,
  FETCH_ITEM_DETAIL_SUCCESS,
} from '../actions/actionTypes';

const initalState = {
  announcement: {},
  material: {},
  assignment: {},
  forum: {},
};

const reducer = handleActions({
  [FETCH_ITEM_LIST_SUCCESS]: (state, { itemType, itemList }) => {
    const byId = itemList.reduce((reduction, item) => ({
      ...reduction,
      [item.id]: {
        ...state[itemType][item.id],
        ...item,
      },
    }), state[itemType]);
    return {
      ...state,
      [itemType]: byId,
    };
  },
  [FETCH_ITEM_DETAIL_SUCCESS]: (state, { itemType, itemId, item }) => ({
    ...state,
    [itemType]: {
      ...state[itemType],
      [itemId]: {
        ...state[itemType][itemId],
        ...item,
      },
    },
  }),
}, initalState);

export default reducer;

