import React from 'react';
import {Route} from 'react-router-dom';
import Header from './navbar/header_container';
import MainPage from './mainpage/mainpage_container';
import { AuthRoute } from '../util/route_util';
const App = () => (
  <div>
    <AuthRoute path="/login" component={Header} />
    <AuthRoute path="/login" component={MainPage} />
  </div>
);
export default App;
