import React from 'react';
import {withRouter} from 'react-router-dom';
class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  renderLogin(){
    const errors = this.props.errors;
    const {formType} = this.props;
    if(formType === "LOGIN"){
    return(
        <div>

        <form onSubmit={this.handleSubmit}>
          <div className="login-label-div">
          <label> Email
          <div className="tooltip">
          <input  type="text"
             className={errors.loginErrors.length > 0 ? 'error' : ''}
             value={this.state.email}
             onChange={this.update('email')} />
          {this.renderErrors()}
           </div>
          </label>
        </div>
          <div className="login-label-div">
          <label> Password
            <div className="tooltip">
            <input type="password"
               className={errors.loginErrors.length > 0 ? 'error' : ''}
               value={this.state.password}
               onChange={this.update('password')} />
             {this.renderErrors()}
             </div>
             <a href="#" className="forgot-password deadlinks">Forgot account?</a>
          </label>
          </div>
          <button type="submit" value={formType}>Log In</button>
         </form>

       </div>
    );
  }
  }

  renderErrors(){
    const {errors} = this.props;
    if (errors.loginErrors.length > 0){
    return (<span className="tooltiptext">
              Incorrect email or password
            </span>);
    }
  }

  render(){
    const {formType} = this.props;

    return(
      this.renderLogin()
    );
  }
}

export default withRouter(LoginForm);
