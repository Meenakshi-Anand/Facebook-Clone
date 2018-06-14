import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  const post = {  body: '' };
  const formType = 'Create Post';

  return { post, formType };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: post => dispatch(createPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
