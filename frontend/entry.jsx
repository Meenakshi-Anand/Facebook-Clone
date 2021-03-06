import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login } from './actions/session_actions';
import {fetchAllUsers,searchUsers,receiveSearch} from './util/session_api_util';
// import {fetchAllUsers,searchUsers} from './actions/session_actions';
document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  //
  // window.login = login;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  window.fetchAllUsers = fetchAllUsers;
  window.searchUsers = searchUsers;
  window.receiveSearch=receiveSearch;
  let store;
    if (window.currentUser) {
      const preloadedState = {
        session: { id: window.currentUser.id },
        entities: {
          users: { [window.currentUser.id]: window.currentUser }
        }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
