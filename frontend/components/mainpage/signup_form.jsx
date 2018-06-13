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
    console.log("inhere");
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
    // const { loginErrors } = errors.login_errors;
    return (<ul >
      {errors.signupErrors.map((error,i) => (
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
      <div className="signup-form">
        <h2>Create New Account</h2>
        <h3>It's free and always will be</h3>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <div>
          <label>
            <input type="text" placeholder={'First Name'}
              value={this.state.fname} onChange={this.update('fname')} />
          </label>
          <label>
            <input type="text" placeholder={'Last Name'}
              value={this.state.lname} onChange={this.update('lname')} />
         </label>
        </div>
          <label>
          <input type="text" placeholder={'Email'}
            value={this.state.email} onChange={this.update('email')} />
          </label>
          <label>
            <input type="text" placeholder={'New Password'}
              value={this.state.password} onChange={this.update('password')} />
          </label>
          <div className="birthday-signup">
          <label> Birthday
            <input type="date" value={this.state.birthday}
              onChange={this.update('birthday')} />
          </label>
          </div>
          <div className="sex-signup">
          <label> Sex
            <div>
             <label>
            <input type="checkbox" value={"M"}
              onChange={this.updateSex("M")} />
              Male
             </label>
             <label>
            <input type="checkbox" value={"F"}
              onChange={this.updateSex("F")} />
              Female
             </label>
             </div>
          </label>
        </div>
          <p>
          By clicking Sign Up,
          you agree to our Terms, Data Policy and Cookies
          Policy. You may receive SMS Notifications from us
          and can opt out any time.</p>
          <button type="submit" value={formType}>Sign Up</button>
         </form>

      </div>
    );
  }
  }

  render(){
    return(
      this.renderSignup()
    );
  }
}

export default withRouter(SignupForm);
