import React from 'react';
import Header from '../navbar/header_container';
import MainPage from '../mainpage/mainpage_container';
import Footer from '../footer/footer_container';
import {withRouter} from 'react-router-dom';

class LoginPage extends React.Component{
  render(){
   return(
     <main>
       <Header class="main-header"/>
       <MainPage />
       
     </main>
  );
  }
}

export default withRouter(LoginPage);
