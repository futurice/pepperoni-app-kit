import {Map} from 'immutable';

// Initial state
const initialState = Map();

// Actions
const LOAD_SAVED_STATE = 'AppState/LOAD_SAVED_STATE';

// Action creators
export function loadSavedState(state) {
  return {
    type: LOAD_SAVED_STATE,
    payload: state
  };
}

// Updater
export default function AppStateUpdater(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_SAVED_STATE:
      // replace existing state with provided saved state
      return action.payload;
    default:
      return state;
  }
}
