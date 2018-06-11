import React from 'react';
import {Link} from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SearchContainer from './search_container';
class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.users = Object.values(this.props.fetchAllUsers());
    console.log(this.users);
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
      <input className="text" type="text" placeholder="Search Users"/>
      <button className="searchButton" type="submit">
      <i className="fas fa-search"></i></button>
      </div>
      <ul className="logout">
      <li>
      <Link to={`/users/${currentUser.id}`}>
      <img className="profile_img" src={currentUser.profile_image_url}></img>
        {currentUser.fname}</Link></li>
      <li className="grey-line">|</li>
      <li><a href="#">Home</a></li>
      <li>
      <section className="friends"></section>
      </li>
      <li>
      <section className="messenger"></section>
      </li>
      <li>
      <section className="notification"></section>
      </li>
      <li className="grey-line">|</li>
      <li>
      <section className="quickhelp"></section>
      </li>
      <li>
        <a href="#">
        <section className="dropdown">
        </section></a>
        <ul className="logout-dropdown">
          <section className="triangle"></section>
          <li><Link to="/" onClick={logout}>Log out</Link></li>
        </ul>
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
            <LoginFormContainer />
            </nav>
          </header>);
    }
  }
}

export default Greeting;
