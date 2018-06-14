import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import newsFeedReducer from './news_feed_reducer';
import postsReducer from './posts_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments:commentsReducer,
  news_feed: newsFeedReducer,
});

export default entitiesReducer;
