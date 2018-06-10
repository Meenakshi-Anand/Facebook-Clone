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
   const formData = new FormData();
   if (this.state.imageFile)
   formData.append("user[cover_image_url]", this.state.imageFile);
   this.props.updateUser(formData);

 }

 handleSubmit(e) {
   const formData = new FormData();
   if (this.state.imageFile)
   formData.append("user[cover_image_url]", this.state.imageFile);
   this.props.updateUser(formData);
 }

render() {
    return(
      <div className="cover-image">
        <img className="coverphoto" src={this.props.user.cover_image_url}/>
        <div className="coverupload">
        <div className="camera-text">
        <button onClick={this.handleSubmit}>
          <label htmlFor="cover-file">
          <i className="fas fa-camera"></i>
          <input type="file" onChange={this.updateFile } id="cover-file"/>
          Update Cover Picture
          </label>
        </button>
        </div>
        </div>
        <div className="div-ul">
        <ul className="timeline-ul">
          <li>Timeline</li>
          <li>About</li>
          <li>Friends</li>
          <li>Photos</li>
          <li>More</li>
        </ul>
        </div>
      <div className="addfriend">
          <button>Add Friend</button>
      </div>
  </div>);
}

}

export default CoverPicture;
