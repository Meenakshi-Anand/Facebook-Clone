import React from 'react';
import {withRouter} from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import GreetingContainer from './greeting_container';
class Header extends React.Component{
  render(){
   return <GreetingContainer />;
  }
}

export default withRouter(Header);
