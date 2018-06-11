import React from 'react';

class ApproveFriend extends React.Component{
handleDeleteRequest(){
  this.props.deleteFriend({friend_request:{
    approver_id:this.props.currentUser.id,
      requestor_id:this.props.user.id}});
}
 handleApproveRequest(){
   this.props.approveFriend({friend_request:{
     approver_id:this.props.currentUser.id,
     requestor_id:this.props.user.id}});
 }
 render(){
   return (
     <section>
     <h2>{this.props.user.fname}</h2>
     <div className="approvefriend">
       <button onClick={this.handleApproveRequest().bind(this)}>
         Approve Request</button>
     </div>
     <div className="deletefriend">
       <button onClick={this.handleDeleteRequest().bind(this)}>
         Delete Request</button>
     </div>
    </section>
   );
 }
}

export default ApproveFriend;
