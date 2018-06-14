import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   posts: this.props.posts,
    // };
    // commentsArr: this.props.posts.by_id[this.props.postId].comments,
  }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.posts.by_id[this.props.postId].comments.length !== newProps.posts.by_id[this.props.postId].comments.length) {
  //     this.setState({posts: newProps.posts});
  //   }
  // }

  render() {
    let commentsArr = this.props.posts.by_id[this.props.postId].comments;

    let commentsMap = commentsArr ? (
      commentsArr.map( commentId => (
          <CommentIndexItemContainer
            comment={this.props.posts.comments[commentId]}
            key={commentId} />
        ))
    ) : ("");

    return (
    <div className="comment-index-container">
      { commentsMap }
    </div>
    );
  }
}

export default CommentIndex;
