import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from './post_form';
import { createPost,fetchAllPosts } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  const post = {  body: '' };
  const formType = 'Create Post';
  const currentUserId = state.session.id;
  const user = state.entities.users[currentUserId];
  return { post, formType , user};
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: post => dispatch(createPost(post)).then(()=>fetchAllPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
