import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {getUserTasks} from '../../services/backScratchService';

// Initial state
const initialState = Map({
  loading: false
});

// Actions
const RANDOM_REQUEST = 'CounterState/RANDOM_REQUEST';
const RANDOM_RESPONSE = 'CounterState/RANDOM_RESPONSE';

// Action creators
export function random() {
  return {
    type: RANDOM_REQUEST
  };
}

export async function requestUserTasks() {
  return {
    type: RANDOM_RESPONSE,
    payload: await getUserTasks()
  };
}

// Reducer
export default function UserStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case RANDOM_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(getUserTasks)
      );

    case RANDOM_RESPONSE:
      return state
        .set('loading', false)
        .set('value', action.payload);

    default:
      return state;
  }
}
