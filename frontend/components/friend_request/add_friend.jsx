import React from 'react';

class AddFriend extends React.Component{

 handleFriendRequest(){
   this.props.postFriendRequest(this.props.user.id,
     this.props.currentUser.id,'pending').then(
      (_) => this.props.fetchUser(this.props.currentUser.id));
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
   if(this.props.currentUser.friends.includes(this.props.user.id)){
     return (
       <div className="addfriend">
         <button>
           Friends</button>
       </div>
     );
   }else if(this.props.currentUser.friend_requested.
     includes(this.props.user.id)){
     return (
       <div className="addfriend">
         <button>
           Pending..</button>
       </div>
     );
   }else{
   return (
     <div className="addfriend">
       <button onClick={()=>this.handleFriendRequest()}>
         Add Friend</button>
     </div>
   );
  }
 }
}

export default AddFriend;
