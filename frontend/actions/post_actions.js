import * as PostApiUtil from '../util/posts_api_util';
import {receiveErrors} from './session_actions';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_WALL_POSTS = 'RECEIVE_WALL_POSTS';
export const RECEIVE_NEWS_FEED_POSTS = 'RECEIVE_NEWS_FEED_POSTS';

export const createPost = postForm => dispatch =>
  PostApiUtil.createPost(postForm).then(post => dispatch(receivePost(post)));

export const updatePost = postForm => dispatch =>
  PostApiUtil.updatePost(postForm).then(post => dispatch(receivePost(post)));

export const deletePost = id => dispatch =>
  PostApiUtil.deletePost(id);

export const fetchWallPosts = id => dispatch =>
  PostApiUtil.fetchWallPosts(id).then(posts =>
    dispatch(receiveWallPosts(posts))
  );

export const fetchNewsFeed =() => dispatch =>
  PostApiUtil.fetchNewsFeed().then(posts =>
    dispatch(receiveAllPosts(posts)));


export const fetchPost = id => dispatch => (
    PostApiUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
);

export const fetchAllPosts = ()=> dispatch => (
    PostApiUtil.fetchAllPosts()
    .then(posts => dispatch(receiveAllPosts(posts)))
);

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const receiveWallPosts = posts => ({
  type: RECEIVE_WALL_POSTS,
  posts
});

export const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});


export const receiveNewsFeedPosts = posts => ({
  type: RECEIVE_NEWS_FEED_POSTS,
  posts
});
