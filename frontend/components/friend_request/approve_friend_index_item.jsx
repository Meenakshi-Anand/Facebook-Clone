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
      () => patchFriendRequest(currentUser.id, user.id, "accepted")
        .then(() => receiveUser(currentUser.id))
     ) : (
      () => destroyFriendRequest(currentUser.id, user.id)
        .then(() => receiveUser(currentUser.id))
     );
  }

  render() {
    let { user } = this.props;
    let profile_img_url;
    let first_name;
    let last_name;
    let id;

    if (user) {
      profile_img_url = user.profile_image_url;
      first_name = user.fname;
      last_name = user.lname;
      id = user.id;
    }

    return (
      <div>
        <div>
          <Link
            to={`/users/${id}`}>
            <img
              src={profile_img_url}/>
            <span>{first_name} {last_name}</span>
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

export default ApproveFriendIndexItem;
