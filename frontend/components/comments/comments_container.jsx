
import React from 'react';
import { connect } from 'react-redux';
import Comment from './comment';
import { fetchComments } from '../../actions/comment_actions';


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fetchComments: postId => dispatch(fetchComments(postId)),
});


export default connect( mapStateToProps, mapDispatchToProps)(Comment);
