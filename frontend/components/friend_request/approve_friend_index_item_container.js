import{fetchUser} from '../../actions/session_actions';
 import {deleteFriend,approveFriend}
 from '../../actions/friend_request_actions';
import { connect } from 'react-redux';
import ApproveFriendIndexItem from './approve_friend_index_item';
const mapStateToProps = (state,ownProps) => {
  const currentUserId = state.session.id ;
  return (
    {currentUser: state.entities.users[currentUserId]}

  );
};

const mapDispatchToProps = dispatch => ({
  patchFriendRequest: (appoverId,requestorId) =>
   dispatch(approveFriend(appoverId,requestorId)),
  destroyFriendRequest: (appoverId,requestorId) =>
  dispatch(deleteFriend(appoverId,requestorId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
});


export default
connect(mapStateToProps , mapDispatchToProps)(ApproveFriendIndexItem);
