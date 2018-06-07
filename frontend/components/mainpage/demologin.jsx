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
           <button type="submit">Demo Login</button>
       </form>
     </div>
  );
  }
}

export default withRouter(DemoLogin);
