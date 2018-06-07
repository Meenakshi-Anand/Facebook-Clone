import React from 'react';
import {withRouter} from 'react-router-dom';
import SignupFormContainer from './signup_form_container';
import DemoLoginContainer from './demo_container';
class MainPage extends React.Component{
  render(){
   return(
    <main className="body">
      <section className="main-section">
      <div className="connect">
      <h2>Connecting with Friends around the world!</h2>
      <section className="main-page-img">
      </section>
      <DemoLoginContainer />
      </div>
      <SignupFormContainer />
      </section>
    </main>

  );
  }
}

export default withRouter(MainPage);
