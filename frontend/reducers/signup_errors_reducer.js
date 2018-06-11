import { RECEIVE_USER , REMOVE_SIGNUP_ERRORS}
       from '../actions/session_actions';
import {merge} from 'lodash';


const signupErrorsReducer = (state = [], action) => {
  Object.freeze(state);


  switch (action.type) {

    case REMOVE_SIGNUP_ERRORS:
      return  action.errors;

    case RECEIVE_USER:
      return [];
    default:
      return state;

  }
};

export default signupErrorsReducer;
