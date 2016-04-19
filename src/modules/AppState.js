import {Map, fromJS} from 'immutable';

// Initial state
const initialState = Map();

// Actions
const LOAD_SAVED_STATE = 'AppState/LOAD_SAVED_STATE';
const USER_LOGIN_SUCCESS = 'AppState/USER_LOGIN_SUCCESS';
const USER_LOGIN_ERROR = 'AppState/USER_LOGIN_ERROR';

// Action creators
export function loadSavedState(state) {
  return {
    type: LOAD_SAVED_STATE,
    payload: state
  };
}

export function onUserLoginSuccess(profile, token) {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: {
      profile: fromJS(profile),
      token: fromJS(token)
    }
  };
}

export function onUserLoginError(error) {
  return {
    type: USER_LOGIN_ERROR,
    payload: error,
    error: true
  };
}

// Reducer
export default function AppStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_SAVED_STATE:
      // replace existing state with provided saved state
      return action.payload;
    case USER_LOGIN_SUCCESS:
      return state
        .set('currentUser', action.payload.profile)
        .set('authenticationToken', action.payload.token);
    default:
      return state;
  }
}
