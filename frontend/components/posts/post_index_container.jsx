import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchUser } from '../../actions/session_actions';
import { fetchAllPosts, deletePost } from '../../actions/post_actions';

const mapStateToProps = (state,ownProps) => {
  let currentUserId = state.session.id;
  return {
  posts: Object.values(state.entities.posts),
  currentUser:state.entities.users[currentUserId],
  users:state.entities.users
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllPosts: ()=>dispatch(fetchAllPosts()),
  deletePost: id => dispatch(deletePost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
