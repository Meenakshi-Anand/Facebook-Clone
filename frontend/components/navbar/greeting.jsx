import React from 'react';
import {Link} from 'react-router-dom';


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
      return "";
    }
  }
}

export default Greeting;
