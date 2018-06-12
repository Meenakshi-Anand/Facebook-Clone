import React from 'react';
import ApproveFriendIndexContainer from './approve_friend_index_item_container';


class ApproveFriendIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { users, currentUser } = this.props;
    debugger;
    let display = (currentUser &&
      currentUser.friend_requests &&
      currentUser.friend_requests.length > 0) ? (
      currentUser.friend_requests.map(friendId => (
        <ApproveFriendIndexContainer
          user={users[friendId]}
          key={friendId} />
      ))
    ) : (
      <div>No New Requests</div>
    );

    return (
      <div>
        {display}
      </div>
    );
  }

}
export default ApproveFriendIndex;
