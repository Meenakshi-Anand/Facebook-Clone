import React from 'react';
import { connect } from 'react-redux';
import {fetchFriendRequests,deleteFriend,approveFriend}
from '../../actions/friend_request_actions';
import {fetchUser} from '../../actions/session_actions';
import ApproveFriendIndex from './approve_friend_index';



const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  fetchFriendRequests: userId => fetchFriendRequests(userId),
  patchFriendRequest: (request) =>
   dispatch(approveFriend(request)),
  destroyFriendRequest: (request) =>
  dispatch(deleteFriend(request)),
  fetchUser: userId => dispatch(fetchUser(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ApproveFriendIndex);
