import React from 'react';
import { Link } from 'react-router-dom';

export default ({user, clearSearchResults}) => {
  return (
    <Link onClick={() => clearSearchResults()} to={`/users/${user.id}`} >
      <img src={user.profile_image_url} />
      <h4>{user.fname.concat(" ").concat(user.lname)}</h4>
    </Link>
  );
};
