import { RECEIVE_CURRENT_USER , REMOVE_LOGIN_ERRORS}
       from '../actions/session_actions';
import {merge} from 'lodash';


const loginErrorsReducer = (state = [], action) => {
  Object.freeze(state);


  switch (action.type) {

    case REMOVE_LOGIN_ERRORS:
      return action.errors;

    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;

  }
};

export default loginErrorsReducer;
