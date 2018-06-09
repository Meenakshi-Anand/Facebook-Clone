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
    return  (
      <header className="greeting_main">
        <section className="greeting">
      <div>
      <div>
      <h2 className="logo">C</h2>
      </div>
      <div>
      <input className="text" type="text" placeholder="Search Users"/>
      <button type="submit">
      <i className="fas fa-search"></i></button>
      </div>
      </div>
      <ul>
      <li>
      <a href="#">
      <img className="profile_img" src={currentUser.profile_image_url}></img>
        {currentUser.fname}</a></li>
      <li><a href="#">Home</a></li>
      <li>
      <div className="icon-friend"></div>
      </li>
      <li>
      <i className="fab fa-facebook-messenger"></i>
      <div className="messages">i</div>
      </li>
      <li>
      <div className="notifications">i</div>
      </li>
      <li>
      <div className="quickhelp"></div>
      </li>
      <li>
        <button onClick={logout}>Logout</button>
      </li>
    </ul>
    </section>
      </header>
    ) ;
    }else{
      return (
         <header className="header">
            <nav>
            <h2> connect </h2>
            <LoginFormContainer />;
            </nav>
          </header>);
    }
  }
}

export default Greeting;
