import React from 'react';
import {Link} from 'react-router-dom';
class Friend extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true
    };
  }
 componentDidMount(){
   this.props.fetchAllUsers().then(()=>this.setState({loading:false}));
 }
 render(){

   let friendIds = this.props.user.friends;
   if (friendIds.length === 0 || this.state.loading){
   return null;
   }else{

     friendIds=this.props.user.friends.slice(0,9);
   return (
     <div className="friends">
       <ul>
      {friendIds.map((el)=>{
       return(<li key={el}>
        <Link to={`/users/${this.props.users[el].id}`}>
        <div>
        <div><img src={this.props.users[el].profile_image_url}/></div>
        <div>{this.props.users[el].name}</div>
        </div>
        </Link>
      </li>);
      })}
      </ul>
     </div>
   );
 }
 }
}

export default Friend;
