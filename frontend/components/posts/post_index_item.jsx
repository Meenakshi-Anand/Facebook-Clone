import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ post, deletePost,user }) => {

  checkImage() {
    if(post.image.match('missing-post.png')){
      return null ;
    }else{
      return(
      <section><img  className="post-photo" src={post.photo} /></section>);
    }
  }
  return (
    <li className="index-post">
      <div className="post-name">
       <section><img className="profile_img"
         src={user.profile_image_url} /></section>
       <h2>{user.fname}</h2>
       <button className="del-button"
         onClick={() => deletePost(post.id)}>Delete</button>
      </div>

      <div>

        <h2>{post.body}</h2>
      </div>

    </li>);
};

export default PostIndexItem;
