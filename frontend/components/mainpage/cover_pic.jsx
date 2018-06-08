import React from 'react';
class CoverPicture extends React.Component{
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
   formData.append("user[cover_image_url]", this.state.imageFile);
   this.props.updateUser(formData);
 }

render() {
    return(
      <div>
        Cover Picture
        <img src={this.props.currentUser.cover_image_url}/>
        <input type="file" onChange={this.updateFile}/>
        <button onClick={this.handleSubmit}>Update Profile Picture</button>
      </div>);
}

}

export default CoverPicture;
