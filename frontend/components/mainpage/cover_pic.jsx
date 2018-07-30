import React from 'react';
import AddFriendContainer from '../friend_request/add_friend_container';
class CoverPicture extends React.Component{
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
     formData.append("user[cover_image_url]", file);
     formData.append("user[id]", this.props.currentUser.id);
     this.props.updateUser(formData);
   }
 }


 updateCoverPhoto(){
   if (this.props.currentUser.id === this.props.user.id){
     return(
     <div className="gaurd">
     <i className="fas fa-camera disp"></i>
     <div className="coverupload">
     <div className="camera-text">
       <div className="cover-text">
       <label htmlFor="cover-file">
        Update Cover Picture
       <input type="file" onChange={this.updateFile} id="cover-file"/>
       </label>
     </div>
     </div>
   </div>
   </div>);
   }else{
     return(<div></div>);
   }
 }

 addFriend(){
   if (this.props.currentUser.id !== this.props.user.id){
     return(
     <div>
       <AddFriendContainer currentUser={this.props.currentUser}
          user={this.props.user}/>
     </div>
    );
   }else{
     return (<div></div>);
   }
 }

render() {
    return(
      <div className="cover-image">
        <img className="coverphoto" src={this.props.user.cover_image_url}/>
        {this.updateCoverPhoto()}
        <div className="div-ul deadlinks">
        <div className="timeline-ul deadlinks ">
          <div className="deadlinks"> </div>
          <div className="deadlinks">Timeline</div>
          <div className="deadlinks">About</div>
          <div className="deadlinks">Friends</div>
          <div className="deadlinks">Photos</div>
          <div className="deadlinks">More</div>
        </div>
        </div>
         {this.addFriend()}
  </div>);
}

}

export default CoverPicture;
