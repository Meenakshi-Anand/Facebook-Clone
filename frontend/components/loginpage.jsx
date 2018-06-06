import React from 'react';
import {withRouter} from 'react-router-dom';
import LoginFormContainer from './navbar/login_form_container';
import SignupFormContainer from './mainpage/signup_form_container';
class LoginPage extends React.Component{
  render(){
   return(
    <div>
      <LoginFormContainer />
      <SignupFormContainer />
    </div>
  );
  }
}

export default withRouter(LoginPage);
