import React from 'react';
import {withRouter} from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import GreetingContainer from './greeting_container';
class Header extends React.Component{
  render(){
   return(
    <header className="header">
      <nav>
      <h2> connect </h2>
      <LoginFormContainer />
      <GreetingContainer />
      </nav>
    </header>
  );
  }
}

export default withRouter(Header);
