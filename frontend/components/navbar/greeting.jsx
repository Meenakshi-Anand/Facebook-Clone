import React from 'react';
import {Link} from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SearchContainer from './search_container';
import ApproveFriendIndexContainer
from '../friend_request/approve_friend_index_container';
class Greeting extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchAllUsers();
  }
  render(){
    const {currentUser, logout} = this.props;

    if (currentUser){
    return  (
      <header className="greeting_main">
      <section className="greeting">
      <div className="left-greeting">
      <Link to={`/`}>
      <h2 className="logo">C</h2>
      </Link>
      <SearchContainer />
      </div>
      <div className="right-greeting">
      <ul className="logout">
      <li>
      <Link className="profileIcon" to={`/users/${currentUser.id}`}>
      <img className="profile_img" src={currentUser.profile_image_url}></img>
        <span className="profile_name">{currentUser.fname}</span></Link></li>
      <li className="grey-line">|</li>
      <li className="profileIcon"><a className="profile_name" href="#">Home</a></li>
      <li className="grey-line">|</li>
      <li>
      <a href="#">
      <section className="friends"></section></a>
       <ApproveFriendIndexContainer currentUser={this.props.currentUser}
         users={this.props.users} fetchAllUsers={this.props.fetchAllUsers}/>

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
    </div>
    </section>
      </header>
    ) ;
    }else{
      return (
         <header className="header">
            <nav>
            <Link to={`/`}>
            <h2> connect </h2>
            </Link>
            <LoginFormContainer />
            </nav>
          </header>);
    }
  }
}

export default Greeting;
