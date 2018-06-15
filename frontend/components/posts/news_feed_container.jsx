import { connect } from 'react-redux';
import NewsFeedIndex from './news_feed_index';
import { fetchUser,fetchAllUsers } from '../../actions/session_actions';
import { fetchNewsFeed, deletePost } from '../../actions/post_actions';

const mapStateToProps = (state,ownProps) => {
  let currentUserId = state.session.id;
  return {
  posts: Object.values(state.entities.posts),
  currentUser:state.entities.users[currentUserId],
  users:state.entities.users
  };
};

const mapDispatchToProps = dispatch => ({
  fetchNewsFeed: ()=>dispatch(fetchNewsFeed()),
  deletePost: id => dispatch(deletePost(id)),
  fetchAllUsers: ()=>dispatch(fetchAllUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeedIndex);
