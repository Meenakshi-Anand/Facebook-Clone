import React from 'react';
import { connect } from 'react-redux';
import {fetchFriendRequests,deleteFriend,approveFriend}
from '../../actions/friend_request_actions';
import {fetchUser} from '../../actions/session_actions';
import ApproveFriendIndex from './approve_friend_index';



const mapStateToProps = state => {

  const currentUserId = state.session.id ;
  return (
  {currentUser: state.entities.users[currentUserId]});
};

const mapDispatchToProps = dispatch => ({
  fetchFriendRequests: userId => fetchFriendRequests(userId),
  patchFriendRequest: (appoverId,requestorId) =>
   dispatch(approveFriend(appoverId,requestorId)),
  destroyFriendRequest: (appoverId,requestorId) =>
  dispatch(deleteFriend(appoverId,requestorId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ApproveFriendIndex);
