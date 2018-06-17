import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from './post_form';
import { createPost,fetchAllPosts } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  const post = {  body: '' };
  const formType = 'Create Post';
  const currentUserId = state.session.id;
  return { post, formType,errors: state.errors.session,};
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: post => dispatch(createPost(post)).then(()=>fetchAllPosts()),
    fetch: ()=> dispatch(fetchAllPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
