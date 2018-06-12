import React from 'react';
import { Link } from 'react-router-dom';

class ApproveFriendIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleRequest = this.handleRequest.bind(this);
  }

  handleRequest(type) {
    let { patchFriendRequest, destroyFriendRequest,
       currentUser, receiveUser, user } = this.props;
    return (type === "confirm") ? (
      () => patchFriendRequest({approver_id:currentUser.id,
        requestor_id:user.id,approval_status: "accepted"})
        .then(() => receiveUser(currentUser.id))
     ) : (
      () => destroyFriendRequest({approver_id:currentUser.id, requestor_id:user.id})
        .then(() => receiveUser(currentUser.id))
     );
  }

  render() {
    let { user } = this.props;

    if (user === undefined) {
      return "";
    }
 else {
    return (
      <div>
        <div>
          <Link
            to={`/users/${user.id}`}>
            <img
              src={user.profile_image_url}/>
            <span>{user.fname} {user.lname}</span>
          </Link>
        </div>

        <div>
          <button
            onClick={this.handleRequest("confirm")}
            >Confirm</button>
          <button
            onClick={this.handleRequest("delete")}
            >Delete Request</button>
        </div>
      </div>
    );
  }
  }
}

export default ApproveFriendIndexItem;
