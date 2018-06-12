export const fetchFriendRequests = userId => (
  $.ajax({
    url: "/api/friend_requests",
    data: { userId },
  })
);

export const postFriendRequest = (request) => (
  $.ajax({
    url: `/api/users/${request.approverId}/friend_requests`,
    method: "POST",
    data: {
      friend_request: {
        request
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
