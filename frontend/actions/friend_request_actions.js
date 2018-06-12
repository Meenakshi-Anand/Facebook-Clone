import { receiveUsers,receiveUser, receiveErrors } from './session_actions';
import * as FriendRequestApiUtil from '../util/friend_request_api_util';

export const fetchFriendRequests = () => (dispatch) => {
  return FriendRequestApiUtil.fetchFriendRequests()
    .then((users) => dispatch(receiveUsers(users)),
    (errors) => dispatch(receiveErrors(errors)));
};

export const requestFriend = friendRequest => dispatch =>
  FriendRequestApiUtil.postFriendRequest(friendRequest).then(
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
