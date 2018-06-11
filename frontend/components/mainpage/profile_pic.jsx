import React from 'react';
import FriendsContainer from '../friend_request/friends_container';
class ProfilePicture extends React.Component{
  constructor(props){
    super(props);
    this.state = {imageFile:null,imageUrl:null};
    this.handleSubmit=this.handleSubmit.bind(this);
    this.updateFile =this.updateFile.bind(this);

  }

 updateFile(e) {
   const file = e.currentTarget.files[0];
   const fileReader = new FileReader();
   fileReader.onloadend = function () {
     this.setState({ imageFile: file, imageUrl: fileReader.result });
   }.bind(this);

   if (file) {
     fileReader.readAsDataURL(file);
   }
 }

 handleSubmit(e) {
   const formData = new FormData();
   if (this.state.imageFile)
   formData.append("user[profile_image_url]", this.state.imageFile);
   this.props.updateUser(formData);
 }
 updateProfilePicture(){
   if (this.props.currentUser.id === this.props.user.id){
     return(
     <div className="profile-upload">
     <div className="profile-text">
       <div className="button-text">
       <label htmlFor="profile-file">
       <i className="fas fa-camera"></i>
       <input type="file" onChange={this.updateFile} id="profile-file"/>
       </label>
       <button onClick={this.handleSubmit}>
          Update Profile Picture
       </button>
       </div>
   </div>
   </div>
   );
   }else{
     return (<div></div>);
   }
 }

render() {
    return(
      <div>
        <div className="profile-name">
        <h1>{this.props.user.fname}</h1>
        <h1>{this.props.user.lname}</h1>
        </div>
        <div>
        <img className="profile_image" src={this.props.user.profile_image_url}/>
        {this.updateProfilePicture()}
        </div>
        <div className="intro">
        <h2> <section className='notification'/> Intro </h2>
        <h3>Birthday : {this.props.user.birthday}</h3>
        </div>
        <div className="friends-page">
          <FriendsContainer />
        </div>
        <div className="posts"> Posts </div>
      </div>);
}

}

export default ProfilePicture;
