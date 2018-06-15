export const createPost = formdata =>
  $.ajax({
    method: 'POST',
    url: 'api/posts',
    data: formdata,
    processData: false,
    contentType: false,
  });

export const updatePost = post =>
  $.ajax({
    method: 'PATCH',
    url: `api/posts/${post.id}`,
    data: { post }
  });

export const deletePost = id =>
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${id}`
  });

export const fetchWallPosts = id =>
  $.ajax({
    method: 'GET',
    url: `api/users/${id}/wall`
  });

export const fetchNewsFeed = () =>
  $.ajax({
    method: 'GET',
    url: `api/users/feed`
  });


  export const fetchPost = id => (
    $.ajax({
      method: 'GET',
      url: `api/posts/${id}`
    })
  );

  export const fetchAllPosts = () => (
    $.ajax({
      method: 'GET',
      url: `api/posts/`
    })
  );
