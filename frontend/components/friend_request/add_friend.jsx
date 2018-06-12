import React from 'react';

class AddFriend extends React.Component{

 handleFriendRequest(){
   this.props.postFriendRequest({approver_id:this.props.user.id,
     requestor_id:this.props.currentUser.id,approval_status:pending});
 }
 render(){
   return (
     <div className="addfriend">
       <button onClick={()=>this.handleFriendRequest()}>
         Add Friend</button>
     </div>
   );
 }
}

export default AddFriend;
