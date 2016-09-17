import {
  FETCH_ITEM_DETAIL,
  FETCH_ITEM_DETAIL_SUCCESS,
  FETCH_ITEM_DETAIL_FAIL,
  DOWNLOAD_ATTACHMENT,
  DOWNLOAD_ATTACHMENT_SUCCESS,
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

export const downloadAttachment = attachment => ({
  type: DOWNLOAD_ATTACHMENT,
  attachment,
});

export const downloadAttachmentSuccess = attachment => ({
  type: DOWNLOAD_ATTACHMENT_SUCCESS,
  attachment,
});

