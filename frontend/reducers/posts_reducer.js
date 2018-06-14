import { RECEIVE_POST, RECEIVE_WALL_POSTS } from '../actions/post_actions';
import merge from 'lodash';
export default (state = {}, action) => {
  Object.freeze(state);

  let wall;
  switch (action.type) {
    case RECEIVE_POST:
    const newState = merge({}, state);
      wall = action.post.wallId;
      if (!newState[wall]) {
        newState[wall] = {};
      }
      newState[wall][action.post.id] = action.post;
      return newState;
    case RECEIVE_WALL_POSTS:
      const postIds = Object.keys(action.posts);
      if (postIds.length === 0) {
        return action.posts;
      }
      wall = action.posts[postIds[0]].wallId;
      newState[wall] = action.posts;
      return newState;
    default:
      return state;
  }
};
