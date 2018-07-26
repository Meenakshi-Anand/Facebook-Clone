import React from 'react';
import FriendsContainer from '../friend_request/friends_container';
import PostIndexContainer from '../posts/post_index_container';
class ProfilePicture extends React.Component{
  constructor(props){
    super(props);
    this.state = {imageFile:null,imageUrl:null};
    this.updateFile =this.updateFile.bind(this);

  }

 updateFile(e) {
   const file = e.currentTarget.files[0];
   const fileReader = new FileReader();
   const formData = new FormData();
   fileReader.onloadend = function () {
     this.setState({ imageFile: file, imageUrl: fileReader.result });
   }.bind(this);

   if (file) {
     fileReader.readAsDataURL(file);
     formData.append("user[profile_image_url]", file);
     this.props.updateUser(formData);
   }
 }

 updateProfilePicture(){
   if (this.props.currentUser.id === this.props.user.id){
     return(
     <button id="profile-upload">
     <div className="profile-text">
       <div className="button-text">
       <label htmlFor="profile-file">
       <i className="fas fa-camera"></i>
       Update Profile Picture
       <input type="file" onChange={this.updateFile} id="profile-file"/>
       </label>
       </div>
   </div>
 </button>
   );
   }else{
     return (<div></div>);
   }
 }
renderPosts(){
 if(this.props.currentUser.id === this.props.user.id ||
    this.props.currentUser.friends.includes(this.props.user.id)){
    return(
    <div className="posts">
      <section className="posts-mids">
        <PostIndexContainer user={this.props.user}/>
      </section>
    </div>);
    }
  else{
    return null;
  }
}


render() {
    return(
      <div className="sub-div">
        <div className="p-div">
        <div className="fff">
        <img className="profile_image" src={this.props.user.profile_image_url}/>
        {this.updateProfilePicture()}
        </div>
        <div className="profile-name">
        <h1>{this.props.user.fname}</h1>
        <h1>{this.props.user.lname}</h1>
        </div>
        </div>
        <div className="pst-div">
        <div>
        <div className="intro">
        <h2> <section className='notification'/> Intro </h2>
        <h4>{this.props.user.bio}</h4>
        </div>
        <div className="friends-page">
        <FriendsContainer user={this.props.user}/>
        </div>
        </div>
        {this.renderPosts()}
        </div>
      </div>);
}

}

export default ProfilePicture;
