import React from 'react';
import PostIndexItem from './post_index_item';
import CreatePostFormContainer from './create_post_form_container';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    const posts = this.props.posts.map(post => {
      if(post.wall_id === this.props.user.id){
      return (
        <PostIndexItem
          key={post.id}
          post= {post}
          user={this.props.user}
          deletePost={this.props.deletePost} />
      );
    }else{
      return null;
    }
    });

    return (
      <div>
        <CreatePostFormContainer />
        <ul>
          {posts}
        </ul>

      </div>
    );
  }
}

export default PostIndex;
