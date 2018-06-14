import { RECEIVE_FEED_POSTS } from '../actions/post_actions';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_FEED_POSTS:
      return action.posts;
    default:
      return state;
  }
};
