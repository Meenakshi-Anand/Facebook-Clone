import {fetchFriends} from '../../actions/friend_request_actions';
import{fetchAllUsers}from '../../actions/session_actions';
import { connect } from 'react-redux';
import Friend from './friends';
const mapStateToProps = (state,ownParams) => {
  const currentUserId = state.session.id ;
  return (
    {users:state.entities.users}

  );
};

const mapDispatchToProps = dispatch => ({
  fetchFriends: (id) => dispatch(fetchFriends(id)),
  fetchAllUsers: ()=> dispatch(fetchAllUsers())
});


export default connect(mapStateToProps , mapDispatchToProps)(Friend);
