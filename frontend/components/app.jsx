import React from 'react';
import {Route} from 'react-router-dom';
import Header from './navbar/header_container';
import Greeting from './navbar/greeting';
import MainPage from './mainpage/mainpage_container';
import Footer from './footer/footer_container';
import LoginPage from './pages/login_page';
import { AuthRoute } from '../util/route_util';
const App = () => (
  <div>
    <Route path="/" component={LoginPage} />
  </div>
);
export default App;
