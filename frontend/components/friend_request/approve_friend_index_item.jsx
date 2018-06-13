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
       console.log(this.props);
       console.log("above me");
    return (type === "confirm") ? (
     patchFriendRequest(currentUser.id,user.id)
     ) : (
     destroyFriendRequest(currentUser.id,user.id)
     );
  }

  render() {
    let { user } = this.props;
    console.log("user");
    console.log(user);
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
            onClick={()=>this.handleRequest("confirm")}
            >Confirm</button>
          <button
            onClick={()=>this.handleRequest("delete")}
            >Delete Request</button>
        </div>
      </div>
    );
  }
  }
}

export default ApproveFriendIndexItem;