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
    this.state={loading:true};
  }
  componentDidMount(){
    this.props.fetchAllUsers().then(()=>this.setState({loading:false}));
  }
  render(){
  if (!this.props.currentUser){
   return(
    <main className="body">
      <section className="main-section">
      <div className="connect">
      <h2>Connect with friends and the world around you.</h2>
      <section className="main-page-img">
        <div className="main-elements">
          <section className="main-1"></section>
          <p className="bold-text">See photos and updates</p>
          <p className="normal-text">from friends in News Feed.</p>
       </div>
       <div className="main-elements">
         <section className="main-2"></section>
         <p className="bold-text">Share what's new </p>
         <p className="normal-text">in your life on your Timeline.</p>
      </div>
      <div className="main-elements">
        <section className="main-3"></section>
        <p className="bold-text">Find more</p>
        <p className="normal-text">of what you're looking for with
          Connect Search.</p>
     </div>
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
      <section className="main-section1">
        <section className="profile-sidebar">
        <ul className="sidebar-ul">
        <li>
         <div className="ll">
        <Link to={`/users/${this.props.currentUser.id}`}>
          <section className="name-tag">
        <section><img className="profile_img"
          src={this.props.currentUser.profile_image_url} /></section>
        <h2> {this.props.currentUser.fname} {this.props.currentUser.lname} </h2>

        </section>
       </Link>
        </div>
        </li>
        <li>
        <Link to="/">
        <section className="name-tag news">
          <i className="far fa-newspaper "></i>
          <h2 className="sp">News Feed</h2>

        </section>
      </Link>
        </li>
        <li>
        <section className="name-tag">
          <i className="fab fa-facebook-messenger "></i>
          <h2 className="sp">Messenger</h2>

        </section>
        </li>
        <li>
        <section className="name-tag">
          <i className="fas fa-video"></i>
          <h2 className="sp">Videos</h2>
        </section>
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
            <h2>Sponsored</h2>
            <section className="add-2">
              <h2 className="add-text"></h2>
              <section className="add-image1"></section>
            </section>

            <section className="add-1">
              <h2 className="add-text"></h2>
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
