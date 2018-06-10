import React from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';
import Header from './navbar/header_container';
import Greeting from './navbar/greeting';
import MainPage from './mainpage/mainpage_container';
import Footer from './footer/footer_container';
import LoginPage from './pages/login_page';
import ProfilePageContainer  from './mainpage/profile_page_container';
import { AuthRoute } from '../util/route_util';
const App = () => (
  <div>
    <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/users/:userId" component={ProfilePageContainer} />
    <Redirect to="/" />
    </Switch>
  </div>
);
export default App;
