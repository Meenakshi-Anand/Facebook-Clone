import * as CommentApiUtil from "../util/comment_api_util";
import {fetchPost} from '../actions/post_actions';
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments,
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment,
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId,
});



export const fetchComments = postId => dispatch => {
  CommentApiUtil.fetchAllComments(postId).
  then( comments => dispatch(receiveComments(comments)));
};

export const fetchComment = (postId, commentId) => dispatch => {
  CommentApiUtil.fetchComment(postId, commentId).
  then( comment => dispatch(receiveComment(comment)));
};

export const postComment = (postId, comment) => dispatch => {
  CommentApiUtil.postComment(postId, comment).
  then( post => dispatch(fetchPost(post.id)));
};

export const updateComment = (postId, comment) => dispatch => {
  CommentApiUtil.patchComment(postId, comment).
  then( newComment => dispatch(receiveComment(newComment)));
};

export const destroyComment = (postId, commentId) => dispatch => {
  CommentApiUtil.deleteComment(postId, commentId).
  then( post => dispatch(fetchPost(post.id)));
};
