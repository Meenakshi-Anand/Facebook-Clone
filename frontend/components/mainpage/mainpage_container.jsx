import React from 'react';
import {withRouter} from 'react-router-dom';
import SignupFormContainer from './signup_form_container';
import DemoLoginContainer from './demo_container';
import { connect } from 'react-redux';
class MainPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
  if (!this.props.currentUser){
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
  }else{
     return(<div className="body">
     </div>);
  }
  }
}

const mapStateToProps = (state) => {
const currentUserId = state.session.id ;
  return (
    {currentUser: state.entities.users[currentUserId] }
  );
};

export default withRouter(connect(mapStateToProps,null)(MainPage));
