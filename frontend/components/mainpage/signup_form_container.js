import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';
const mapStateToProps = (state,ownProps) => {
  return {
    errors: state.errors.session,
    formType: "SIGNUP"
  };
};

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    processForm: (user)=> dispatch(signup(user))
  };
};


export default connect(mapStateToProps , mapDispatchToProps)(SignupForm);
