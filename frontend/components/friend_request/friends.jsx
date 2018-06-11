import React from 'react';
import {Link} from 'react-router-dom';
class Friend extends React.Component{

 render(){
   let i=0;
   let friends = this.props.friends.slice(9);
   return (
     <div className="friends">
       <ul>
      {friends.map((el)=>{
       return(<li>
        <Link to={`/users/${el.id}`}>
        <div>
        <div><img src={el.profile_image_url}/></div>
        <div>{el.name}</div>
        </div>
        </Link>
      </li>);
      })}
      </ul>
     </div>
   );
 }
}

export default Friend;
