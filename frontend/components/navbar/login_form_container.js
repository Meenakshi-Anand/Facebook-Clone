import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
const mapStateToProps = (state,ownProps) => {
  return {
    errors: state.errors.session,
    formType: "LOGIN"

  };
};

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    processForm: (user)=> dispatch(login(user))
  };
};


export default connect(mapStateToProps , mapDispatchToProps)(LoginForm);
