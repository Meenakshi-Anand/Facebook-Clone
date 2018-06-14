import React from 'react';
import PostIndexItem from './post_index_item';
import CreatePostFormContainer from './create_post_form_container';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchWallPosts(this.props.user.id);
  }

  render() {
    console.log("posts");
    console.log(this.props.posts);
    console.log("======");
    debugger;
    const posts = this.props.posts.map(post => {
      console.log(this.props.post);
      return (
        <PostIndexItem
          key={post.id}
          post= {post}
          user={this.props.user}
          deletePost={this.props.deletePost} />
      );
    });

    return (
      <div>
        <ul>
          {posts}
        </ul>
        <CreatePostFormContainer />
      </div>
    );
  }
}

export default PostIndex;
