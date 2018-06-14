import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      author_id: parseInt(this.props.currentUser.id),
      post_id: this.props.postId,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({body: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createComment(this.props.postId, this.state);

    this.setState({ body: "" });
  }

  render() {
    let { postId, currentUser, posts, users } = this.props;

    return (
    <div className="comment-form-container">
      <img
        className="profile-thumbnail-small-circle
        comment-form-profile-thumbnail"
        // src={users[currentUser.id].profile_img_url}
        src={currentUser.profile_img_url}
        alt="user profile thumbnail"/>
      <form
        className="comment-form-form"
        onSubmit={this.handleSubmit}>
        <input
          id={`comment-form-input-${postId}`}
          className="comment-form-input"
          type="text"
          onChange={this.handleChange}
          placeholder="Write a comment..."
          value={this.state.body}/>
      </form>
    </div>
    );
  }
}

export default CommentForm;
