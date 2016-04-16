import {Map} from 'immutable';

// Initial state
const initialState = Map({
  value: 0
});

// Actions
const INCREMENT = 'CounterState/INCREMENT';
const RESET = 'CounterState/RESET';
// Action creators
export function increment() {
  return {type: INCREMENT};
}

export function reset() {
  return {type: RESET};
}

// Updater
export default function CounterStateUpdater(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state.update('value', value => value + 1);
    case RESET:
      return initialState;
    default:
      return state;
  }
}
