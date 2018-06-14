import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session';
import { fetchFeed } from '../actions/post';
import PostsList from './posts/PostsList';

const mapStateToProps = ({
  entities: { feed, users },
  session: { currentUser }
}) => ({
  posts: feed,
  users,
  user: currentUser,
  currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchAction: id => dispatch(fetchFeed(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
