import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ post, deletePost }) => {
  return (
    <li>
      <div>
      <section>{post.author_id.profile_image_url}</section>
      <h2>{post.author_id.fname}</h2>
      </div>
      <Link to={`/posts/${post.id}/edit`}>
        Edit
      </Link>
      <button onClick={() => deletePost(post.id)}>Delete</button>
    </li>);
};

export default PostIndexItem;
