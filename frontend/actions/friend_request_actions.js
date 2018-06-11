import { receiveUser, receiveErrors } from './session_actions';
import * as FriendRequestApiUtil from '../util/friend_request_api_util';

export const requestFriend = friendRequest => dispatch =>
  FriendRequestApiUtil.RequestFriend(friendRequest).then(
    user => dispatch(receiveUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const approveFriend = friendRequestId => dispatch =>
  FriendRequestApiUtil.approveRequest(friendRequestId).then(
    user => dispatch(receiveUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const deleteFriend = friendRequestId => dispatch =>
  FriendRequestApiUtil.deleteRequest(friendRequestId).then(
    user => dispatch(receiveUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

  export const RECEIVE_USERS = 'RECEIVE_USERS';

  export const receiveUsers = (users) => {
    return {
      type: RECEIVE_USERS,
      users
    };
  };

  export const fetchFriends = (friendRequestId) => (dispatch) => {
    return FriendRequestApiUtil.fetchFriends(friendRequestId)
      .then((users) => dispatch(receiveUsers(users)),
      (errors) => dispatch(receiveErrors(errors)));
  };

  export const fetchFriendRequests = () => (dispatch) => {
    return FriendRequestApiUtil.fetchFriendRequests()
      .then((requesters) => dispatch(receiveRequesters(requesters)),
      (errors) => dispatch(receiveErrors(errors)));
  };

  export const RECEIVE_REQUESTERS = 'RECEIVE_REQUESTERS';

  export const receiveRequesters = (requesters) => {
    return {
      type: RECEIVE_REQUESTERS,
      requesters
    };
  };
