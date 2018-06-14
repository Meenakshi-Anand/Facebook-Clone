export const fetchComments = postId => (
  $.ajax({
    url: `/api/posts/${postId}/comments`,
  })
);

export const fetchComment = (postId, commentId) => (
  $.ajax({
    url: `/api/posts/${postId}/comments/${commentId}`,
  })
);

export const postComment = (postId, comment) => (
  $.ajax({
    url: `/api/posts/${postId}/comments`,
    method: "POST",
    data: { comment },
  })
);

export const patchComment = (postId, comment) => (
  $.ajax({
    url: `/api/posts/${postId}/comments/${comment.id}`,
    method: "PATCH",
    data: { comment },
  })
);

export const deleteComment = (postId, commentId) => (
  $.ajax({
    url: `/api/posts/${postId}/comments/${commentId}`,
    method: "DELETE",
  })
);
