import React from 'react';
import ApproveFriendIndexItemContainer
from './approve_friend_index_item_container';


class ApproveFriendIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { users, currentUser } = this.props;
    console.log(this.props);
    let display = (
      currentUser.friend_requests.length > 0) ? (
      currentUser.friend_requests.map((id) => (
        <ApproveFriendIndexItemContainer
          user={users[id]}
          key={id} />
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
