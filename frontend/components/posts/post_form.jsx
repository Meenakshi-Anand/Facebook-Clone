import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      author_id:this.props.user.id,
      body:this.props.post.body,
      photo:{imageFile:null,imageUrl:null},
      wall_id:this.props.user.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadNewPhoto = this.uploadNewPhoto.bind(this);
    this.postPicture = this.postPicture.bind(this);
  }

  resetPostForm() {
  this.setState({
    body: '',
    photo: null
  });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
   e.preventDefault();
   var formData = new FormData();
   formData.append("post[body]", this.state.body);
   if (this.state.photo) {
     formData.append("post[photo]", this.state.photo.imageFile);
   }
   formData.append("post[wall_id]", this.props.user.id);
   formData.append("post[author_id]", this.props.user.id);

   this.props.action(formData).then(()=>{
     this.resetPostForm();
   });

  }


  uploadNewPhoto(e) {
  var reader = new FileReader();
  var file = e.currentTarget.files[0];
  reader.onloadend = function() {
    this.setState({photo:{ imageFile: file, imageUrl: reader.result }});
  }.bind(this);
  if (file) {
    reader.readAsDataURL(file);
  }
 }

 postPicture(){
  return(
    <div>
    <label>
    <i className="fas fa-camera"></i>
      Im here
    <input type="file" onChange={this.uploadNewPhoto}/>
    </label>
    </div>
    );
  }

  render () {
  console.log(this.props.user);
  return (
  <div>
   <h3>{this.props.formType}</h3>
    <form onSubmit={this.handleSubmit}>
      <div>
      <section><img src={this.props.user.profile_image_url} /></section>
      <h2> Whats in your mind? {this.props.user.fname} </h2>
      </div>
      <label>
      <textarea
        value={this.state.body}
        onChange={this.update('body')} />
      </label>
      <label>Add Photo</label>
      <div>
      {this.postPicture()}
      </div>
      <input type="submit" value={this.props.formType} />
      </form>
    </div>
    );
  }
}

export default withRouter(PostForm);
