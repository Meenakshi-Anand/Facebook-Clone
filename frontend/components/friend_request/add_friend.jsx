import React from 'react';

class AddFriend extends React.Component{
 handleFriendRequest(){
   this.props.requestFriend({friend_request:{
     requestor_id:this.props.currentUser.id,
     approver_id:this.props.users[this.props.match.userId]}});
 }
 render(){
   return (
     <div className="addfriend">
       <button onClick={this.handleFriendRequest().bind(this)}>
         Add Friend</button>
     </div>
   );
 }
}

export default AddFriend;
