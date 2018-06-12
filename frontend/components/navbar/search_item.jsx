import React from 'react';
import { Link } from 'react-router-dom';

export default ({user, clearSearchResults}) => {
  return (
    <li>
    <Link onClick={()=>clearSearchResults()} to={`/users/${user.id}`} >
      <div className="search-div">
      <img src={user.profile_image_url} />
      <h4 className="name-search">
        {user.fname.concat(" ").concat(user.lname)}</h4>
      </div>
    </Link>
    </li>
  );
};
