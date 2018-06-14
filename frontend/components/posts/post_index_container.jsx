import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchWallPosts, deletePost } from '../../actions/post_actions';

const mapStateToProps = state => {
  let currentUserId = state.session.id;
  return {
  user:state.entities.users[currentUserId],
  posts: Object.values(state.entities.posts)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchWallPosts: (id) => dispatch(fetchWallPosts(id)),
  deletePost: id => dispatch(deletePost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
