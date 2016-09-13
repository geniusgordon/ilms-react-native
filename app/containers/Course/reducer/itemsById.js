import { handleActions } from 'redux-actions';
import {
  FETCH_ITEM_LIST_SUCCESS,
  FETCH_ITEM_DETAIL_SUCCESS,
} from '../actions/actionTypes';
import { FETCH_FORUM_SUCCESS } from '../../Forum/actionTypes';
import {FETCH_LATEST_NEWS_SUCCESS } from '../../Home/actionTypes';

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
  [FETCH_FORUM_SUCCESS]: (state, { forum }) => ({
    ...state,
    forum: {
      ...state.forum,
      [forum.id]: {
        ...state.forum[forum.id],
        ...forum,
      },
    },
  }),
  [FETCH_LATEST_NEWS_SUCCESS]: (state, { latestNews }) => {
    const byId = latestNews.reduce((reduction, item) => ({
      ...reduction,
      [item.itemId]: {
        ...state.announcement[item.itemId],
        ...item,
      },
    }), state.announcement);
    return {
      ...state,
      announcement: byId,
    };
  },
}, initalState);

export default reducer;

