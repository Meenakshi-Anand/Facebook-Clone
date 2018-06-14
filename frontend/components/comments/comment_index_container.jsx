
import React from 'react';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments } from './../../actions/comment';

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments,
});

const mapDispatchToProps = dispatch => ({
  fetchComments: postId => dispatch(fetchComments(postId)),
});


export default connect( mapStateToProps, mapDispatchToProps)(CommentIndex);
