import React from 'react';
import {Route} from 'react-router-dom';
import GreetingContainer from './navbar/greeting_container';
import { AuthRoute } from '../util/route_util';
import LoginPage from './loginpage';
const App = () => (
  <div>
    <header>
      <h1>Facebook</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={LoginPage} />
  </div>
);
export default App;
