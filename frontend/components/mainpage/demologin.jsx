import React from 'react';
import {withRouter} from 'react-router-dom';
import {demologin} from '../../actions/session_actions';
class DemoLogin extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm();
  }
  render(){
   return(
     <div>
       <form onSubmit={this.handleSubmit}>
           <button type="submit">Want to try the site before registering? 
            Click here to sign in as demo user.</button>
       </form>
     </div>
  );
  }
}

export default withRouter(DemoLogin);
