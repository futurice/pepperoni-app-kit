---
to: src/modules/<%= name %>/<%= Name %>State.js
---
import { Map } from 'immutable';

// Initial state
const initialState = Map({

});

// Actions
const ACTION = '<%= Name %>State/ACTION';

// Action creators
export function act() {
  return { type: ACTION };
}

// Reducer
export default function <%= Name %>StateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION:
      return state;
    default:
      return state;
  }
}


