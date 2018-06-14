import React from 'react';
import ApproveFriendIndexItemContainer
from './approve_friend_index_item_container';


class ApproveFriendIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.currentUser.friend_requests.length,
    currentUser: this.props.currentUser };

  }

  componentWillReceiveProps(newProps) {

    if (newProps.users[newProps.currentUser.id].friends.length
       !== this.props.currentUser.friends.length) {

      this.setState( {
      currentUser: newProps.users[newProps.currentUser.id],
      count: newProps.users[newProps.currentUser.id].friend_requests.length});
    }
  }

  render() {

    let { users } = this.props;
    let currentUser = this.state.currentUser;
    if (this.count===0){
      this.count=null;
    }
    let display = (
      currentUser.friend_requests.length > 0) ? (
        <div className="main-req">
        <span className="blast">{this.state.count}</span>
        <ul className="request-dropdown">
        <section className="new-triangle"></section>
        {currentUser.friend_requests.map((id) => (
        <li className="fr-req"><ApproveFriendIndexItemContainer
          user={users[id]}
          key={id} /></li>))}
        </ul>
        </div>
    ) : (
      <div className="main-req">
      <ul className="request-dropdown">
      <section className="new-triangle"></section>
      <li>No New Requests</li>
      </ul>
    </div>
    );

    return (
      <div>
        {display}
      </div>

    );
  }

}
export default ApproveFriendIndex;
