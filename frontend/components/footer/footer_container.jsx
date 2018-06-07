import React from 'react';
import {withRouter} from 'react-router-dom';

class Footer extends React.Component{
  render(){
   return(

      <footer className="footer">
        <a href={"#"}>Git Hub</a>
        <a href={"#"}>LinkedIn</a>
      </footer>

  );
  }
}

export default withRouter(Footer);
