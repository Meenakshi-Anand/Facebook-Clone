import { receiveUsers,receiveUser, receiveErrors } from './session_actions';
import * as FriendRequestApiUtil from '../util/friend_request_api_util';

export const fetchFriends = (id) => (dispatch) => {
  return FriendRequestApiUtil.fetchFriendRequests(id)
    .then((users) => dispatch(receiveUsers(users)),
    (errors) => dispatch(receiveErrors(errors)));
};

export const requestFriend = (approverId,requestorId,approval_status)=>
  dispatch => FriendRequestApiUtil.
  postFriendRequest(approverId,requestorId,approval_status).then(
    user => dispatch(receiveUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const approveFriend = (approverId,requestorId)=> dispatch =>
  FriendRequestApiUtil.patchFriendRequest(approverId,requestorId).then(
    req => dispatch(receiveUser(req.approver_id)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const deleteFriend = (approverId,requestorId)=> dispatch =>
  FriendRequestApiUtil.destroyFriendRequest(approverId,requestorId).then(
    user => dispatch(receiveUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
