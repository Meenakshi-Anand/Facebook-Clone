import React from 'react';
import AddFriendContainer from '../friend_request/add_friend_container';
class CoverPicture extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
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
   formData.append("user[cover_image_url]", this.state.imageFile);
   this.props.updateUser(formData);
 }
 updateCoverPhoto(){
   if (this.props.currentUser.id === this.props.user.id){
     return(<div className="coverupload">
     <div className="camera-text">
       <div className="cover-text">
       <label htmlFor="cover-file">
       <i className="fas fa-camera"></i>
       <input type="file" onChange={this.updateFile} id="cover-file"/>
       </label>
       <button onClick={this.handleSubmit}>
         Update Cover Picture
      </button>
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
        <ul className="timeline-ul">
          <li>Timeline</li>
          <li>About</li>
          <li>Friends</li>
          <li>Photos</li>
          <li>More</li>
        </ul>
        </div>
         {this.addFriend()}
  </div>);
}

}

export default CoverPicture;
