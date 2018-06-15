import React from 'react';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    this.props.deletePost(this.props.post.id)
    .then(()=>this.props.fetchAllPosts());
  }
  renderImage(){
    if(this.props.post.photo.match( '/assets/missing-post')){
      return null ;
    }else{
      return (<section><img  className="post-photo"
      src={this.props.post.photo} /></section>);
    }
  }
  render(){
  const { post, deletePost,user ,fetchAllPosts} = this.props;
  return (
    <li className="index-post">
      <div className="post-name">
       <section><img className="profile_img"
         src={user.profile_image_url} /></section>
       <h2>{user.fname}</h2>
       <button className="del-button"
         onClick={()=>this.handleSubmit()}>Delete</button>
      </div>

      <div>
        {this.renderImage()}
        <h2>{post.body}</h2>
      </div>

    </li>);
  }
}
export default PostIndexItem;
