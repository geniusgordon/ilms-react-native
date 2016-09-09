import {
  FETCH_FORUM,
  FETCH_FORUM_SUCCESS,
  FETCH_FORUM_FAIL,
  SEND_POST,
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

export const sendPost = (action, courseId, postId, post) => ({
  type: SEND_POST,
  action,
  courseId,
  postId,
  post,
});

