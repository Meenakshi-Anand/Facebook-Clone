import {updateUser,fetchUser} from '../../actions/session_actions';
import { connect } from 'react-redux';
import ProfilePage from './profile_page';
const mapStateToProps = (state,ownProps) => {
  return (
    {user: state.entities.users[ownProps.match.params.userId]}
  );
};

const mapDispatchToProps = dispatch => ({
  updateUser: (formData) => (dispatch(updateUser(formData))),
  fetchUser: (id) => (dispatch(fetchUser(id)))
});


export default connect(mapStateToProps , mapDispatchToProps)(ProfilePage);
