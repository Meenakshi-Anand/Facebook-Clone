import React from 'react';
import { connect } from 'react-redux';
import PostForm from './post_form';
import { fetchPost, updatePost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultPost = { body: '' };
  const post = state.entities.posts[ownProps.match.params.postId]
             || defaultPost;
  const formType = 'Update Post';

  return { post, formType };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: id => dispatch(fetchPost(id)),
    action: post => dispatch(updatePost(post)),
  };
};

class EditPostForm extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.post.id !== nextProps.match.params.postId) {
      this.props.fetchPost(nextProps.match.params.postId);
    }
  }

  render() {
    const { action, formType, post } = this.props;
    return (
      <PostForm
        action={action}
        formType={formType}
        post={post} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);
