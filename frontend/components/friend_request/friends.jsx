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
   let count = " ";
   let friendIds = this.props.user.friends;
   console.log(friendIds);
   if (friendIds.length === 0 || this.state.loading){
   return null;
   }else{
     count = this.props.user.friends.length;
     friendIds=this.props.user.friends.slice(0,9);
   return (
     <div>
       <h2> <section className='friends'/>
       Friends <span className="span-text">[{count}]</span></h2>
       <ul>
      {friendIds.map((el)=>{
       return(<li className="friends-user" key={el}>
        <Link to={`/users/${this.props.users[el].id}`}>
        <div>
        <div><img src={this.props.users[el].profile_image_url}/></div>
        <div>{this.props.users[el].fname} {this.props.users[el].lname}</div>
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
