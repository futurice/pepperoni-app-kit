import {Map} from 'immutable';

export const RESET_STATE = 'SessionState/RESET';
export const INITIALIZE_STATE = 'SessionState/INITIALIZE';
// Initial state
const initialState = Map({isReady: false});

export function resetSessionStateFromSnapshot(state) {
  return {
    type: RESET_STATE,
    payload: state
  };
}

export function initializeSessionState() {
  return {
    type: INITIALIZE_STATE
  };
}

// Reducer
export default function SessionStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INITIALIZE_STATE:
    case RESET_STATE:
      return state.set('isReady', true);

    default:
      return state;
  }
}
