import {
  FETCH_ITEM_LIST,
  FETCH_ITEM_LIST_SUCCESS,
  FETCH_ITEM_LIST_FAIL,
} from './actionTypes';

export const fetchItemList = (courseId, itemType, params) => ({
  type: FETCH_ITEM_LIST,
  courseId,
  itemType,
  params,
});

export const fetchItemListSuccess = (course, itemType, itemList, params) => ({
  type: FETCH_ITEM_LIST_SUCCESS,
  course,
  itemType,
  itemList,
  params,
});

export const fetchItemListFail = (courseId, itemType, error) => ({
  type: FETCH_ITEM_LIST_FAIL,
  courseId,
  itemType,
  error,
});

