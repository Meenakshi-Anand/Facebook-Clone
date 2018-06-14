import React from 'react';
import {withRouter} from 'react-router-dom';
import SignupFormContainer from './signup_form_container';
import DemoLoginContainer from './demo_container';
import { connect } from 'react-redux';
import {fetchAllUsers} from '../../actions/session_actions';
class MainPage extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchAllUsers();
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
    { currentUser:state.entities.users[currentUserId],
          users:state.entities.users }
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: ()=>dispatch(fetchAllUsers())
  };
};

export default
withRouter(connect(mapStateToProps,mapDispatchToProps)(MainPage));
