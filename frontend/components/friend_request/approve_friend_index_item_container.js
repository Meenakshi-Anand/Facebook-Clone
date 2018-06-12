import {patchFriendRequest,destroyFriendRequest}
 from '../../util/friend_request_api_util';
 import {fetchUser,deleteFriend,approveFriend}
 from './../../actions/session_actions';
import { connect } from 'react-redux';
import ApproveFriendIndexItem from './add_friend';
const mapStateToProps = (state,ownProps) => {
  const currentUserId = state.session.id ;
  return (
    {currentUser: state.entities.users[currentUserId]}

  );
};

const mapDispatchToProps = dispatch => ({
  patchFriendRequest: (request) =>
   dispatch(approveFriend(request)),
  destroyFriendRequest: (request) =>
  dispatch(deleteFriend(request)),
  fetchUser: userId => dispatch(fetchUser(userId)),
});


export default
connect(mapStateToProps , mapDispatchToProps)(ApproveFriendIndexItem);
