import {
  FETCH_ITEM_DETAIL,
  FETCH_ITEM_DETAIL_SUCCESS,
  FETCH_ITEM_DETAIL_FAIL,
} from './actionTypes';

export const fetchItemDetail = (courseId, itemType, itemId) => ({
  type: FETCH_ITEM_DETAIL,
  courseId,
  itemType,
  itemId,
});

export const fetchItemDetailSuccess = (itemType, itemId, item) => ({
  type: FETCH_ITEM_DETAIL_SUCCESS,
  itemType,
  itemId,
  item,
});

export const fetchItemDetailFail = (itemType, itemId, error) => ({
  type: FETCH_ITEM_DETAIL_FAIL,
  itemType,
  itemId,
  error,
});

