import React from 'react';
import {Route} from 'react-router-dom';
import LoginFormContainer from './navbar/login_form_container';
import SignupFormContainer from './mainpage/signup_form_container';
import GreetingContainer from './navbar/greeting_container';
import { AuthRoute } from '../util/route_util';
const App = () => (
  <div>
    <header>
      <h1>Facebook</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/login" component={SignupFormContainer} />
  </div>
);
export default App;
