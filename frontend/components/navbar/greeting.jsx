import React from 'react';
import {Link} from 'react-router-dom';
import LoginFormContainer from './login_form_container';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {currentUser, logout} = this.props;

    if (currentUser){
    return  (<div>
         <h3>Welcome {currentUser.fname}!</h3>
         <button onClick={logout}>Logout</button>
         </div>
    ) ;
    }else{
      return <LoginFormContainer />;
    }
  }
}

export default Greeting;
