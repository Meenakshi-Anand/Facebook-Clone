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
    photo: {imageFile:null,imageUrl:null}
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
   if (this.state.photo.imageFile) {
     formData.append("post[photo]", this.state.photo.imageFile);
   }
   formData.append("post[wall_id]", this.props.user.id);
   formData.append("post[author_id]", this.props.currentUser.id);

   this.props.action(formData).then(()=>{
     this.resetPostForm();
   });

  }

  renderErrors(){
    const {errors} = this.props;
    // const { loginErrors } = errors.login_errors;
    return (<ul className="post-error">
      {errors.generalErrors.map((error,i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
       </ul>);
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
    <input type="file" onChange={this.uploadNewPhoto}/>
    </label>
    </div>
    );
  }

  render () {
  return (
  <div className="create-post1">
  {this.renderErrors()}
   <h3> Make Post</h3>
    <form onSubmit={this.handleSubmit}>
      <div className="post-name">
      <section><img className="profile_img"
        src={this.props.user.profile_image_url} /></section>
      <label>
      <textarea
        value={this.state.body}
        placeholder={`Whats in your mind ,${this.props.user.fname}?`}
        onChange={this.update('body')}/>
      </label>
      </div>
      <div className="last-buttons">
      {this.postPicture()}

      <input type="submit" value="Post" />
      </div>
      </form>
    </div>
    );
  }
}

export default withRouter(PostForm);
