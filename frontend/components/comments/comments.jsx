import React from 'react';
import CommentIndexContainer from './comment_index_container';
import CommentFormContainer from './comment_form_container';

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { postId } = this.props;

    return (
    <div className="comment-container">
      <CommentIndexContainer postId={postId}/>
      <CommentFormContainer postId={postId}/>
    </div>
    );
  }
}

export default Comment;
