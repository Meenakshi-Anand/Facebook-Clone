import React from 'react';
import { Link } from 'react-router';
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
        console.log(comments[key].post_id);
           key = parseInt(key);
          const picStyle = {backgroundImage:"url("+comments[key].authorpic+")"};
      let deleteComment = () => {
        if(this.props.currentUser.id === comments[key].authorid) {
          return(
            <div onClick={() => this.execDeleteComment(comments[key].post_id,key)}>
              <i className="material-icons">delete_forever</i>
            </div>
          );
        }
      };

        return (
          <div>
            <div>
              <div>
                {comments[key].authorf} {comments[key].authorl}
              </div>
              <div className="post-comment-body">{comments[key].body}</div>
            </div>
            {deleteComment()}
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
          <input type="submit" value="comment"></input>
        </form>
      </div>
    );
  }

  render() {
    return(
      <div>
        {this.allComments()}
        {this.commentForm()}
      </div>
    );
  }
}

export default withRouter(Comments);
