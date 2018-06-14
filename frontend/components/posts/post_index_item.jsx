import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ post, deletePost,user }) => {
  return (
    <li>
      <div>
       <section><img src={user.profile_image_url} /></section>
       <h2>{user.fname}</h2>
      </div>
      <div>
        <section><img src={post.photo} /></section>
        <h2>{post.body}</h2>
      </div>
      <button onClick={() => deletePost(post.id)}>Delete</button>
    </li>);
};

export default PostIndexItem;
