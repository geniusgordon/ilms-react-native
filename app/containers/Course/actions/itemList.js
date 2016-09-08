import {
  FETCH_ITEM_LIST,
  FETCH_ITEM_LIST_SUCCESS,
  FETCH_ITEM_LIST_FAIL,
} from './actionTypes';

export const fetchItemList = (courseId, itemType) => ({
  type: FETCH_ITEM_LIST,
  courseId,
  itemType,
});

export const fetchItemListSuccess = (courseId, itemType, itemList) => ({
  type: FETCH_ITEM_LIST_SUCCESS,
  courseId,
  itemType,
  itemList,
});

export const fetchItemListFail = (courseId, itemType, error) => ({
  type: FETCH_ITEM_LIST_FAIL,
  courseId,
  itemType,
  error,
});

