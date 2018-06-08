import {updateUser,fetchUser} from '../../actions/session_actions';
import { connect } from 'react-redux';
import ProfilePicture from './profile_pic';
const mapStateToProps = (state) => {

  const currentUserId = state.session.id ;
  return (
    {currentUser: state.entities.users[currentUserId]}
  );
};

const mapDispatchToProps = dispatch => ({
  updateUser: (formData) => (dispatch(updateUser(formData))),
  fetchUser: (id) => (dispatch(fetchUser(id)))
});


export default connect(mapStateToProps , mapDispatchToProps)(ProfilePicture);
