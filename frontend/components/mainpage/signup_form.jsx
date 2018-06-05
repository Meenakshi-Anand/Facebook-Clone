import React from 'react';
import {withRouter} from 'react-router-dom';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      birthday: "",
      sex: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }


  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  updateSex(value){
    return(e)=>{
    this.setState({sex:value});
    };
  }

  renderErrors(){
    const {errors} = this.props;
    return (<ul>
      {errors.map((error,i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
       </ul>);
  }

  renderSignup(){
    const {formType} = this.props;
    if (formType === "SIGNUP"){
    return(
      <div>

        <h1>{formType}</h1>
          <h2>Create New Account</h2>
          <h3>It will always be free</h3>
        <form onSubmit={this.handleSubmit}>
          <label> First name
            <input type="text" value={this.state.fname}
              onChange={this.update('fname')} />
          </label>
          <label> Last name
            <input type="text" value={this.state.lname}
              onChange={this.update('lname')} />
          </label>
          <label> Email
          <input type="text" value={this.state.email}
            onChange={this.update('email')} />
          </label>
          <label> New Password
            <input type="text" value={this.state.password}
              onChange={this.update('password')} />
          </label>
          <label> Birthday
            <input type="date" value={this.state.birthday}
              onChange={this.update('birthday')} />
          </label>
          <label> Sex
             <label> Male
            <input type="checkbox" value={"M"}
              onChange={this.updateSex("M")} />
             </label>
             <label> Female
            <input type="checkbox" value={"F"}
              onChange={this.updateSex("F")} />
             </label>
          </label>
          <button type="submit" value={formType}>{formType}</button>
         </form>
         {this.renderErrors()}
      </div>
    );
  }
  }

  render(){
    return(
      <div>
      {this.renderSignup()}
      </div>
    );
  }
}

export default withRouter(SignupForm);
