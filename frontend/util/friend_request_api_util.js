export const fetchFriends = user_id => (
  $.ajax({
    url: "/api/friend_requests",
    data: { user_id },
  })
);


export const requestFriend = friendRequest =>
  $.ajax({
    method: 'POST',
    url: 'api/friend_requests',
    data: { friendRequest }
  });

export const approveRequest = friendRequestId =>
  $.ajax({
    method: 'PATCH',
    url: `api/friend_requests/${friendRequestId}`
  });

export const deleteRequest = friendRequestId =>
  $.ajax({
    method: 'DELETE',
    url: `api/friend_requests/${friendRequestId}`
  });
