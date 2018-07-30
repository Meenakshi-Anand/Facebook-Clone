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
        <div className="div-ul">
        <div className="timeline-ul">
          <div> </div>
          <div>Timeline</div>
          <div>About</div>
          <div>Friends</div>
          <div>Photos</div>
          <div>More</div>
        </div>
        </div>
         {this.addFriend()}
  </div>);
}

}

export default CoverPicture;
