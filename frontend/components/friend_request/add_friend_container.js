import {requestFriend} from '../../actions/friend_request_actions';
import { connect } from 'react-redux';
import AddFriend from './add_friend';
const mapStateToProps = (state,ownProps) => {
  const currentUserId = state.session.id ;
  return (
    {currentUser: state.entities.users[currentUserId],
     users: state.entities.users}

  );
};

const mapDispatchToProps = dispatch => ({
  requestFriend: (req) => dispatch(requestFriend(req))
});


export default connect(mapStateToProps , mapDispatchToProps)(AddFriend);
