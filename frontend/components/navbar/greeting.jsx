import React from 'react';
import {Link} from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {currentUser, logout} = this.props;

    const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.fname}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
    </div>
  );
    return (
      <div>
        {display}
      </div>
    );
  }
}

export default Greeting;
