import React from 'react';
import {withRouter} from 'react-router-dom';
import SignupFormContainer from './signup_form_container';
import DemoLoginContainer from './demo_container';
import NewsFeedContainer from '../posts/news_feed_container';
import PostIndexContainer from '../posts/post_index_container';
import { connect } from 'react-redux';
import {fetchAllUsers} from '../../actions/session_actions';
import {Link} from 'react-router-dom';
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
     return(
      <div className="body">
      <section className="main-section">
        <section className="profile-sidebar">
        <ul className="sidebar-ul">
        <li>
         <div className="ll">
        <Link to={`/users/${this.props.currentUser.id}`}>
          <div className="name-tag">
        <section><img className="profile_img"
          src={this.props.currentUser.profile_image_url} /></section>
        <h2> {this.props.currentUser.fname} {this.props.currentUser.lname} </h2>
          </div>
       </Link>
        </div>
        </li>
        <li>
        <Link to="/">
        <div className="name-tag">
          <i className="far fa-newspaper space"></i>
          <h2>News Feed</h2>
        </div>
      </Link>
        </li>
        <li>
        <div className="name-tag">
          <i className="fab fa-facebook-messenger space"></i>
          <h2>Messenger</h2>
        </div>
        </li>
        <li>
        <div className="name-tag">
          <i className="fas fa-video space"></i>
          <h2>Videos</h2>
        </div>
        </li>
        </ul>
        </section>
        <section className="posts-mid">
          <NewsFeedContainer user={this.props.currentUser}
            currentUser={this.props.currentUser}
            fetchAllUsers={this.props.fetchAllUsers}/>
        </section>
        <section className="adds-sidebar">
          <div className="did-add">

            <section className="add-2">
              <h2 className="add-text">Marlia</h2>
              <section className="add-image1"></section>
            </section>

            <section className="add-1">
              <h2 className="add-text">Adobe.</h2>
              <section className="add-image2"></section>
            </section>


          </div>
        </section>
        </section>
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
