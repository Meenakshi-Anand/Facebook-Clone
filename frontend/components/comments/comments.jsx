import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.allComments = this.allComments.bind(this);
    this.commentForm = this.commentForm.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.execDeleteComment = this.execDeleteComment.bind(this);

    this.state = {
      body: '',
      author_id:this.props.currentUser.id,
      post_id:this.props.post.id
    };
  }
  componentDidMount(){

  }
  componentWillReceiveProps(newProps){
    this.setState({
      body: '',
      author_id:newProps.currentUser.id,
      post_id:newProps.post.id
    });
  }
  execDeleteComment(postId,key) {
    this.props.deleteComment(postId,key).then(()=>this.prop);
  }

  allComments() {
    if (this.props.comments) {
      let comments = this.props.comments;
      let commentKeys = Object.keys(this.props.comments);
      return commentKeys.map((key) => {
           key = parseInt(key);
          const picStyle = {backgroundImage:"url("+comments[key].authorpic+")"};
      let deleteComment = () => {
        if(this.props.currentUser.id === comments[key].authorid) {
          return(
         <div key={comments[key].id}
           onClick={() => this.execDeleteComment(comments[key].post_id,key)}>
            <span className="delete-hover"> ...
            <i className="fas fa-trash-alt space-del"></i>
            </span>
        </div>
          );
        }
      };

        return (
          <div className="each-comment">
            <div className="post-name1">
              <Link to={`/users/${comments[key].author_id}`}>
              <img className="profile_img" src={comments[key].authorpic}/>
              </Link>
              <div className="post-me">
              <Link to={`/users/${comments[key].author_id}`}>
              <h2 className="comment-text">{comments[key].authorf}</h2>
              </Link>
              <div className="post-comment-body">{comments[key].body}</div>
              </div>
              <div>
              {deleteComment()}
              </div>
            </div>
          </div>
        );
      });
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.postComment(this.props.post.id, this.state);
  }

  commentForm() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Write a comment..."
            value={this.state.body} onChange={this.update('body')}></input>
        </form>
      </div>
    );
  }

  render() {
    return(
      <div className="comments">
        {this.allComments()}
        {this.commentForm()}
      </div>
    );
  }
}

export default withRouter(Comments);
