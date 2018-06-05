import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import {merge} from 'lodash';
const _nullSession = {
    id: null
};

const SessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);


  switch (action.type) {

    case RECEIVE_CURRENT_USER:
    const newState= {
        id: action.user.id
    };

      return merge({}, state, newState );

    case LOGOUT_CURRENT_USER:
      return merge({},state,_nullSession);

    default:
      return state;

  }
};

export default SessionReducer;
