import React from 'react';
import ApproveFriendIndexItemContainer
from './approve_friend_index_item_container';


class ApproveFriendIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { users, currentUser } = this.props;
    let count = currentUser.friend_requests.length;
    if (count===0){
      count='';
    }
    let display = (
      currentUser.friend_requests.length > 0) ? (
        <ul className="request-dropdown">
        <section className="new-triangle"></section>
        {currentUser.friend_requests.map((id) => (
        <li class="fr-req"><ApproveFriendIndexItemContainer
          user={users[id]}
          key={id} /></li>))}
        </ul>

    ) : (
      <ul className="request-dropdown">
      <section className="new-triangle"></section>
      <li>No New Requests</li>
      </ul>
    );

    return (
      <div className="main-req">
        <span className="blast">{count}</span>

        {display}

      </div>
    );
  }

}
export default ApproveFriendIndex;
