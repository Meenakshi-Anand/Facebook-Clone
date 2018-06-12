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

export const patchFriendRequest = (approverId,requestorId) => (
  $.ajax({
    url: `/api/users/${approverId}/friend_requests/${requestorId}`,
    method: "PATCH",
    data: {
      friend_request: {
        approver_id:approverId,
        requestor_id:requestorId,
        approval_status:'accepted'
      }
    },
  })
);

export const destroyFriendRequest = (approverId,requestorId) => (
  $.ajax({
    url: `/api/users/${approverId}/friend_requests/${requestorId}`,
    method: "DELETE",
    data: {
      friend_request: {
        approver_id:approverId,
        requestor_id:requestorId,
        approval_status:'denied'
      }
    },
  })
);
