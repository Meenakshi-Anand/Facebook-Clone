import { RECEIVE_USER, REMOVE_LOGOUT_ERRORS}
       from '../actions/session_actions';
import {merge} from 'lodash';


const logoutErrorsReducer = (state = [], action) => {
  Object.freeze(state);


  switch (action.type) {

    case REMOVE_LOGOUT_ERRORS:
      return  action.errors;

    case RECEIVE_USER :
      return [];
    default:
      return state;

  }
};

export default logoutErrorsReducer;
