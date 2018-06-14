import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.post.id != nextProps.match.params.postId) {
      this.props.fetchPost(nextProps.match.params.postId);
    }
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div>
        <section>{post.author_id.profile_image_url}</section>
        <h2>{post.author_id.fname}</h2>
        </div>
        <p>{post.body}</p>
      </div>
    );
  }
}

export default PostShow;
