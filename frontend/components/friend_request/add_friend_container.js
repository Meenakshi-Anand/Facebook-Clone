import {requestFriend,fetchFriendRequests} from '../../actions/friend_request_actions';
import { connect } from 'react-redux';
import AddFriend from './add_friend';
const mapStateToProps = (state,ownProps) => {
  return {errors: state.errors.session};
};

const mapDispatchToProps = dispatch => ({
  postFriendRequest: (approverId,requestorId,approval_status)=>
  dispatch(requestFriend(approverId,requestorId,approval_status)),
  fetchFriendRequests: (id)=>dispatch(fetchFriendRequests(id))
});


export default connect(mapStateToProps , mapDispatchToProps)(AddFriend);
