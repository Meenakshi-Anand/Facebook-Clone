import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const REMOVE_LOGIN_ERRORS = 'REMOVE_LOGIN_ERRORS';
export const REMOVE_SIGNUP_ERRORS = 'REMOVE_SIGNUP_ERRORS';
export const REMOVE_LOGOUT_ERRORS = 'REMOVE_LOGOUT_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';
export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
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

export const receiveErrors = (errors) => ({
  type: REMOVE_ERRORS,
  errors
});

export const receiveLogoutErrors = (errors) => ({
  type: REMOVE_LOGOUT_ERRORS,
  errors
});


export const login = (user) => dispatch => {
  return SessionAPIUtil.login(user)
  .then(newUser => {
    dispatch(receiveUser(newUser));
  }, (err => {
    dispatch(receiveLoginErrors(err.responseJSON));
  }));
};

export const demologin = () => dispatch => {
  return SessionAPIUtil.demologin().then(user=> {
    return dispatch(receiveUser(user));
  });
};



export const signup = (user) => dispatch => {
  return SessionAPIUtil.signup(user)
  .then(newUser => {
    dispatch(receiveUser(newUser));
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

export const fetchUser = (id) => {
  return (dispatch) => {
    return SessionAPIUtil.fetchUser(id).then(
      (success) => dispatch(receiveUser(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

export const fetchAllUsers = () => {
  return (dispatch) => {
    return SessionAPIUtil.fetchAllUsers().then(
      (users) => dispatch(receiveAllUsers(users)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

export const updateUser = (data) => {
  return (dispatch) => {
    return SessionAPIUtil.updateUser(data).then(
      (success) => dispatch(receiveUser(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

const receiveSearch = (results) => {
  return {
    type: RECEIVE_SEARCH,
    results
  };
};

export const searchUsers = (query) => (dispatch) => {
  return SessionAPIUtil.searchUsers(query).then((users) =>
  dispatch(receiveSearch(users)), (err) => dispatch(receiveErrors(err)));
};
export const clearSearchResults = () => {
  return {
    type: CLEAR_SEARCH_RESULTS
  };
};
