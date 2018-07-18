import React from 'react';
import { Link } from 'react-router-dom';
import CommentsContainer from '../comments/comments_container';
class NewsFeedIndexItem extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    this.props.deletePost(this.props.post.id)
    .then(()=>this.props.fetchNewsFeed());
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
          </span></div>);
    }else{
      return null;
    }
  }
  render(){
  const { post, deletePost,user,fetchNewsFeed} = this.props;
  return (
    <li className="index-post">
      <div className="post-name">
       <Link to={`/users/${post.author_id}`}>
       <section><img className="profile_img"
         src={post.profile_image_url} /></section>
       </Link>
       <Link to={`/users/${post.author_id}`}>
       <h2 className="post-author">{post.authorfname}</h2>
       </Link>
        {this.renderDelete()}
      </div>

      <div>
        {this.renderImage()}
        <h2 className="pos-text">{post.body}</h2>
      </div>

      <CommentsContainer post={post} comments={post.comments}/>

    </li>);
  }
}
export default NewsFeedIndexItem;
