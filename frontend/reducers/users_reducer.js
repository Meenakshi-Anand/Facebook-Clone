import { RECEIVE_SEARCH,CLEAR_SEARCH_RESULTS,
RECEIVE_ALL_USERS,RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {merge} from 'lodash';

const usersReducer = (state = { search_results: []}, action) => {
  Object.freeze(state);


  switch (action.type) {
    case RECEIVE_ALL_USERS:
    return merge({},state,action.users);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user} );
    case CLEAR_SEARCH_RESULTS:
     let  clearState = merge({}, state);
       clearState.search_results = [];
       return clearState;
    case RECEIVE_SEARCH:
      let  newState = merge({}, state, action.results.users );
       newState.search_results = action.results.search_results;
       return newState;
     default:
       return state;
  }
};

export default usersReducer;
