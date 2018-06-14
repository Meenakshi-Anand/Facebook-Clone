import React from 'react';
import { connect } from 'react-redux';
import CommentIndexItem from './comment_index_item';
import { updateComment, destroyComment } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  posts: state.posts,
  currentUser: state.session.currentUser,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  updateComment: (postId, comment) => dispatch(updateComment(postId, comment)),
  destroyComment: (postId, commentId) => dispatch(destroyComment(postId, commentId)),
});


export default connect( mapStateToProps, mapDispatchToProps)(CommentIndexItem);
