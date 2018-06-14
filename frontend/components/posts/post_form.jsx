import React from 'react';
import { withRouter } from 'react-router-dom';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.photo.state = {imageFile:null,imageUrl:null};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.post;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(merge({},this.state,this.photo.state)).then(() => this.props.history.push('/'));
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

  handlePostSubmit(e) {
    const formData = new FormData();
    if (this.state.imageFile)
    this.photo.state = {"post[photo]": this.state.imageFile};
  }

  postPicture(){
      return(
      <div className="profile-upload">
      <div className="profile-text">
        <div className="button-text">
        <label htmlFor="profile-file">
        <i className="fas fa-camera"></i>
        <input type="file" onChange={this.updateFile} id="profile-file"/>
        </label>
        <button onClick={this.handlePostSubmit}>
           Add Photo
        </button>
        </div>
    </div>
    </div>
    );
  }

  render () {
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
          <section>{this.props.user.profile_image_url}</section>
          <h2> Whats in your mind? </h2>
          </div>
          <label>
            <textarea
              value={this.state.body}
              onChange={this.update('body')} />
          </label>
          <label>Add Photo</label>
          {this.postPicture()}
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default withRouter(PostForm);
