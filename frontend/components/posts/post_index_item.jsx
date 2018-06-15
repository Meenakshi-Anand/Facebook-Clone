import React from 'react';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component{

  renderImage(){
    if(this.props.post.photo.match( '/assets/missing-post')){
      return null ;
    }else{
      return (<section><img  className="post-photo"
      src={this.props.post.photo} /></section>);
    }
  }
  render(){
  console.log(this.props.post.photo);
  const { post, deletePost,user ,fetchAllPosts} = this.props;
  return (
    <li className="index-post">
      <div className="post-name">
       <section><img className="profile_img"
         src={user.profile_image_url} /></section>
       <h2>{user.fname}</h2>
       <button className="del-button"
         onClick={() =>
           deletePost(post.id).then(()=>fetchAllPosts())}>Delete</button>
      </div>

      <div>
        {this.renderImage()}
        <h2>{post.body}</h2>
      </div>

    </li>);
  }
}
export default PostIndexItem;
