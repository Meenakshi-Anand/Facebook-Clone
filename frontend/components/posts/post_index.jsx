import React from 'react';
import PostIndexItem from './post_index_item';
import CreatePostFormContainer from './create_post_form_container';

class PostIndex extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    const posts = this.props.posts.reverse().map(post => {
      if(post.wall_id === this.props.user.id){
      return (
        <PostIndexItem
          key={post.id}
          post= {post}
          user={this.props.user}
          deletePost={this.props.deletePost}
          fetchAllPosts={this.props.fetchAllPosts}
          currentUser={this.props.currentUser}
          users={this.props.users}/>
      );
    }else{
      return null;
    }
    });

    return (
      <div>
        <CreatePostFormContainer user={this.props.user}
          currentUser={this.props.currentUser}/>
        <ul>
          {posts}
        </ul>

      </div>
    );
  }
}

export default PostIndex;
