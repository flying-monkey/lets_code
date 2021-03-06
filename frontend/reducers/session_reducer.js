import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS
} from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return merge({}, state, {
        currentUser
      });
    case RECEIVE_SESSION_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    case CLEAR_SESSION_ERRORS:
      let user = state.currentUser;
      return merge({}, {currentUser: user} , {
        errors: []
      });
    default:
      return state;
  }
};

export default SessionReducer;
