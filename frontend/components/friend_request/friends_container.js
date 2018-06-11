import {fetchFriends} from '../../actions/friend_request_actions';
import { connect } from 'react-redux';
import Friend from './friends';
const mapStateToProps = (state,ownParams) => {
  const currentUserId = state.session.id ;
  return (
    {currentUser: state.entities.users[currentUserId],
     friends: state.entities.users.friend_requests.friends}

  );
};

const mapDispatchToProps = dispatch => ({
  fetchFriends: (id) => dispatch(fetchFriends(id))
});


export default connect(mapStateToProps , mapDispatchToProps)(Friend);
