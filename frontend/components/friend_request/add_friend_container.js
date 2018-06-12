import {requestFriend} from '../../actions/friend_request_actions';
import { connect } from 'react-redux';
import AddFriend from './add_friend';
const mapStateToProps = (state,ownProps) => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  postFriendRequest: (request)=>dispatch(requestFriend(request))
});


export default connect(mapStateToProps , mapDispatchToProps)(AddFriend);
