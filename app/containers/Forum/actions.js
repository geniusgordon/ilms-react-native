import {
  FETCH_FORUM,
  FETCH_FORUM_SUCCESS,
  FETCH_FORUM_FAIL,
} from './actionTypes';

export const fetchForum = (forumId) => ({
  type: FETCH_FORUM,
  forumId,
});

export const fetchForumSuccess = (forum) => ({
  type: FETCH_FORUM_SUCCESS,
  forum,
});

export const fetchForumFail = (error) => ({
  type: FETCH_FORUM_FAIL,
  error,
});

