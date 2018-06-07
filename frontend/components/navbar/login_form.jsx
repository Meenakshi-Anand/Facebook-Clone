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
    const {formType} = this.props;
    if(formType === "LOGIN"){
    return(
        <div>
          {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <div className="login-label-div">
          <label> Email
          <input type="text" value={this.state.email}
             onChange={this.update('email')} />
          </label>
          </div>
          <div className="login-label-div">
          <label> Password
            <input type="text" value={this.state.password}
               onChange={this.update('password')} />
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
    return (<ul>
      {errors.loginErrors.map((error,i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
       </ul>);
  }

  render(){
    const {formType} = this.props;

    return(
      this.renderLogin()
    );
  }
}

export default withRouter(LoginForm);
