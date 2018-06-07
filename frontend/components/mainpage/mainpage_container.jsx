import React from 'react';
import {withRouter} from 'react-router-dom';
import SignupFormContainer from './signup_form_container';

class MainPage extends React.Component{
  render(){
   return(
    <main className="body">
      <section className="main-section">
      <div>
      <h2>Connecting with Friends around the world!</h2>
      <section className="main-page-img">
      </section>
      </div>
      <SignupFormContainer />
      </section>
    </main>
  );
  }
}

export default withRouter(MainPage);
