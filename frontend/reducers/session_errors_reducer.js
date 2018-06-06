import { combineReducers } from 'redux';
import loginErrorsReducer from './login_errors_reducer';
import logoutErrorsReducer from './logout_errors_reducer';
import signupErrorsReducer from './signup_errors_reducer';

const sessionErrorReducer = combineReducers({
  loginErrors: loginErrorsReducer,
  logoutErrors: logoutErrorsReducer,
  signupErrors: signupErrorsReducer
});

export default sessionErrorReducer;
