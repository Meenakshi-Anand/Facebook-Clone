import {RECEIVE_CURRENT_USER,
   RECEIVE_SEARCH,CLEAR_SEARCH_RESULTS,RECEIVE_ALL_USERS,RECEIVE_USER }
from '../actions/session_actions';
import {merge} from 'lodash';

const usersReducer = (state = { search_results: []}, action) => {
  Object.freeze(state);


  switch (action.type) {
    case RECEIVE_ALL_USERS:
    return action.users;
    case RECEIVE_CURRENT_USER:
    const newUser =
    merge({},state,{[action.currentUser.id]: action.currentUser});
    return newUser;
    case RECEIVE_USER:
      // const newUser = { [action.user.id]: action.user};
      let newState = Object.assign({}, state, action.user);
      return newState;
      // const newState = merge({},state);
      // newState[action.user.id] = action.user;
      // return newState;
    case CLEAR_SEARCH_RESULTS:
     let  clearState = merge({}, state);
       clearState.search_results = [];
       return clearState;
    case RECEIVE_SEARCH:
      let  newSearchState = merge({}, state);
       newSearchState.search_results = action.results;
       return newSearchState;
     default:
       return state;
  }
};

export default usersReducer;
