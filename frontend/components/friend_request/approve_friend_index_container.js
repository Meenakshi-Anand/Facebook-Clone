import React from 'react';
import { connect } from 'react-redux';
import ApproveFriendIndex from './approve_friend_index';
import {
  fetchFriendRequests,
  patchFriendRequest,
  destroyFriendRequest
} from '../../util/friend_request_api_util';


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
