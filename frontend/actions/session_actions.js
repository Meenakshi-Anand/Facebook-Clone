import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const REMOVE_LOGIN_ERRORS = 'REMOVE_LOGIN_ERRORS';
export const REMOVE_SIGNUP_ERRORS = 'REMOVE_SIGNUP_ERRORS';
export const REMOVE_LOGOUT_ERRORS = 'REMOVE_LOGOUT_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  user: currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveLoginErrors = (errors) => ({
  type: REMOVE_LOGIN_ERRORS,
  errors
});

export const receiveSignupErrors = (errors) => ({
  type: REMOVE_SIGNUP_ERRORS,
  errors
});

export const receiveLogoutErrors = (errors) => ({
  type: REMOVE_LOGOUT_ERRORS,
  errors
});

export const login = (user) => dispatch => {
  return SessionAPIUtil.login(user)
  .then(newUser => {
    dispatch(receiveCurrentUser(newUser));
  }, (err => {
    dispatch(receiveLoginErrors(err.responseJSON));
  }));
};

export const signup = (user) => dispatch => {
  return SessionAPIUtil.signup(user)
  .then(newUser => {
    dispatch(receiveCurrentUser(newUser));
  }, (err => {
    dispatch(receiveSignupErrors(err.responseJSON));
  }));
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
  .then(()=> {
    dispatch(logoutCurrentUser());
  }, (err) => {
    dispatch(receiveLogoutErrors(err.responseJSON));
  });
};
