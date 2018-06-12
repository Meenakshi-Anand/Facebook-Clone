import React from 'react';
import {withRouter} from 'react-router-dom';
import CoverPicture from './cover_pic';
import ProfilePicture from './profile_pic';
import Header from '../navbar/header_container';
class ProfilePage extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.props.fetchUser(this.props.match.params.userId);
    this.setState(this.user);
  }
  render(){
    let {user}=this.props;
    if (user === 'undefined'){
      return "";
    }else{
    return (
      <div className="profile">
        <Header class="main-header" user={this.props.user}/>
        <section className="profile-sec">
        <CoverPicture user={this.props.user}
          currentUser={this.props.currentUser}
          updateUser={this.props.updateUser}/>
        <ProfilePicture user={this.props.user}
          currentUser={this.props.currentUser}
          updateUser={this.props.updateUser}/>
        </section>
      </div>
    );}
  }
}
export default withRouter(ProfilePage);
