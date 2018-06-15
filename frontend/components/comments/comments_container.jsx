
import { connect } from 'react-redux';
import Comments from './comments';

import { postComment, destroyComment } from '../../actions/comment_actions';
import { fetchPost } from '../../actions/post_actions';

const mapStateToProps = state => {

  const currentUserId = state.session.id ;
  return (
  {currentUser: state.entities.users[currentUserId]});
};

const mapDispatchToProps = (dispatch) => {
  return {
    postComment: (postId, comment) => dispatch(postComment(postId, comment)),
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    deleteComment: (postId,commentId) => dispatch(destroyComment(postId,commentId)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Comments);
