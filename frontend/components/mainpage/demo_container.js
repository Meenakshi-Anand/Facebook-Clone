import { connect } from 'react-redux';
import DemoLogin from './demologin';
import { demologin } from '../../actions/session_actions';
const mapStateToProps = (state,ownProps) => {
  return {
    errors: state.errors.session,
    formType: "SIGNUP"
  };
};

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    processForm: (user)=> dispatch(demologin(user))
  };
};


export default connect(mapStateToProps , mapDispatchToProps)(DemoLogin);
