import {approveFriend,deleteFriend} from '../../actions/friend_request_actions';
import { connect } from 'react-redux';
import ApproveFriend from './approve_friend';
const mapStateToProps = (state) => {
  const currentUserId = state.session.id ;
  return (
    {currentUser: state.entities.users[currentUserId],
     friend_request: state.entities.users.requests_from}

  );
};

const mapDispatchToProps = dispatch => ({
  approveFriend: (id) => dispatch(approveFriend(id)),
  deleteFriend: (id) => dispatch(deleteFriend(id))
});


export default connect(mapStateToProps , mapDispatchToProps)(ApproveFriend);
