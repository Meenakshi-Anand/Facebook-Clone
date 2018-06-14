import {RECEIVE_CURRENT_USER,RECEIVE_USER, LOGOUT_CURRENT_USER }
 from '../actions/session_actions';
import merge from 'lodash/merge';
const _nullSession = {
    id: null
};

const SessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);


  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    let newCState;
    if(action.currentUser.id === undefined){
      newCState= {
        id: Object.keys(action.currentUser)
    };
    }else{
        newCState= {
          id: action.currentUser.id
      };
   }
   return merge({}, state, newCState );
   //  case RECEIVE_USER:
   //  const newState= {
   //      id: action.user.id
   //  };
   //
   // return merge({}, state, newState );

    case LOGOUT_CURRENT_USER:
      return merge({},state,_nullSession);

    default:
      return state;

  }
};

export default SessionReducer;
