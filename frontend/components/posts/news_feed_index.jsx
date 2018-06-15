import React from 'react';
import NewsFeedIndexItem from './news_feed_index_item';
import CreatePostFormContainer from './create_post_form_container';

class NewsFeedIndex extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.fetchNewsFeed();
    this.props.fetchAllUsers();
  }

  render() {
    const posts = this.props.posts.reverse().map(post => {
      if(post.wall_id === this.props.currentUser.id ||
         this.props.currentUser.friends.includes(post.author_id)){
      return (
        <NewsFeedIndexItem
          key={post.id}
          post= {post}
          user={this.props.user}
          deletePost={this.props.deletePost}
          fetchNewsFeed={this.props.fetchNewsFeed}
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

export default NewsFeedIndex;
