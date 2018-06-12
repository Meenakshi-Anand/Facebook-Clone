import React from 'react';

class AddFriend extends React.Component{

 handleFriendRequest(){
   this.props.postFriendRequest({approver_id:this.props.user.id,
     requestor_id:this.props.currentUser.id,approval_status:'pending'});
 }
 renderErrors(){
   const {errors} = this.props;
   console.log(errors);
   return (<ul >
     {errors.generalErrors.map((error,i) => (
           <li key={`error-${i}`}>
             {error}
           </li>
         ))}
      </ul>);
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
