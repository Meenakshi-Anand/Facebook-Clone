export const fetchFriendRequests = userId => (
  $.ajax({
    url: "/api/friend_requests",
    data: { userId },
  })
);

export const postFriendRequest = (approverId,requestorId,approval_status) => (
  $.ajax({
    url: `/api/users/${approverId}/friend_requests`,
    method: "POST",
    data: {
      friend_request: {
        approver_id:approverId,
        requestor_id:requestorId,
        approval_status:approval_status
      }
    },
  })
);

export const patchFriendRequest = (request) => (
  $.ajax({
    url: `/api/users/${request.approverId}/friends/${request.requestorId}`,
    method: "PATCH",
    data: {
      friend_request: {
        request
      }
    },
  })
);

export const destroyFriendRequest = (request) => (
  $.ajax({
    url: `/api/users/${request.approverId}/friends/${request.requestorId}`,
    method: "DELETE",
    data: {
      friend_request: {
        request
      }
    },
  })
);
