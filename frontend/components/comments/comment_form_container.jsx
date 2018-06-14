import React from 'react';
import CommentForm from './comment_form';
import { connect } from 'react-redux';
import { fetchComments, createComment } from './../../actions/comment';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  posts: state.posts,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  fetchComments: postId => dispatch(fetchComments(postId)),
  createComment: (postId, comment) => dispatch(createComment(postId, comment)),
});


export default connect( mapStateToProps, mapDispatchToProps)(CommentForm);
