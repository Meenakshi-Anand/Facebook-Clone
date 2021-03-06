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
    if (type === "confirm"){
     (patchFriendRequest(currentUser.id,user.id)
     .then(()=>this.props.fetchUser(currentUser.id)));
    }else{
     (destroyFriendRequest(currentUser.id,user.id)
     .then(()=>this.props.fetchUser(currentUser.id)));
    }
  }

  render() {
    let { user } = this.props;
    if (user === undefined) {
      return "";
    }
 else {
    return (
      <div className="req-index">
        <div className="name-blk">
          <Link
            to={`/users/${user.id}`}>
            <img
              src={user.profile_image_url}/>
            <span className="user-name">{user.fname} {user.lname}</span>
          </Link>
        </div>

        <div className="actions">
          <button className="b-button"
            onClick={()=>this.handleRequest("confirm")}
            >Confirm</button>
          <button className="gray-button"
            onClick={()=>this.handleRequest("delete")}
            >Delete</button>
        </div>
      </div>
    );
  }
  }
}

export default ApproveFriendIndexItem;
