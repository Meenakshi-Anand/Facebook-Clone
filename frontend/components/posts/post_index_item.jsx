import React from 'react';
import { Link } from 'react-router-dom';
import CommentsContainer from '../comments/comments_container';
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

  renderDelete(){
    if(this.props.currentUser.id === this.props.post.author_id){
      return(<button className="del-button"
        onClick={()=>this.handleSubmit()}>Delete</button>);
    }else{
      return null;
    }
  }
  render(){

  const { post, deletePost,user ,fetchAllPosts,users} = this.props;
  const newUser = users[post.author_id];
  return (
    <li className="index-post">
      <div className="post-name">
       <section><img className="profile_img"
         src={newUser.profile_image_url} /></section>
       <h2>{newUser.fname}</h2>
        {this.renderDelete()}
      </div>

      <div>
        {this.renderImage()}
        <h2>{post.body}</h2>
      </div>
       <CommentsContainer post={this.props.post}
         comments={this.props.post.comments}/>
    </li>);
  }
}
export default PostIndexItem;
