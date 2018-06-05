import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  user: currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = (user) => dispatch => {
  return SessionAPIUtil.login(user)
  .then(newUser => {
    dispatch(receiveCurrentUser(newUser));
  }, (err => {
    dispatch(receiveErrors(err));
  }));
};

export const signup = (user) => dispatch => {
  return SessionAPIUtil.signup(user)
  .then(newUser => {
    dispatch(receiveCurrentUser(newUser));
  }, (err => {
    dispatch(receiveErrors(err));
  }));
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
  .then(()=> {
    dispatch(logoutCurrentUser());
  }, (err) => {
    dispatch(receiveErrors(err));
  });
};
