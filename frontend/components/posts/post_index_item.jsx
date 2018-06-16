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
      return(<div
        onClick={()=>this.handleSubmit()}>
        <span className="delete-hover"> ...
        <i className="fas fa-trash-alt space-del"></i>
        </span>
      </div>);
    }else{
      return null;
    }
  }
  render(){

  const { post, deletePost,user ,fetchAllPosts,users} = this.props;
  const newUser = users[post.author_id];
  return (
    <li className="index-post1">
      <div className="post-name1">
       <section><img className="profile_img"
         src={newUser.profile_image_url} /></section>
       <h2 className="post-name-text">{newUser.fname}</h2>
        {this.renderDelete()}
      </div>

      <div>
        {this.renderImage()}
        <h2 className="pos-text1">{post.body}</h2>
      </div>
       <CommentsContainer post={post} comments={post.comments}/>
    </li>);
  }
}
export default PostIndexItem;
