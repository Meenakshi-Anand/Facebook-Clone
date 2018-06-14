import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchWallPosts, deletePost } from '../../actions/post_actions';

const mapStateToProps = state => ({
  posts: Object.keys(state.entities.posts).map(id => state.entities.posts[id])
});

const mapDispatchToProps = dispatch => ({
  fetchWallPosts: (id) => dispatch(fetchWallPosts(id)),
  deletePost: id => dispatch(deletePost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
