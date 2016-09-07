import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {postTask} from '../../services/backScratchService';

// Initial state
const initialState = Map({
  newTask: {},
  loading: false
});

// Actions
const RESET = 'TaskManagerState/RESET';
const POST_REQUEST = 'TaskManagerState/POST_REQUEST';
const POST_RESPONSE = 'TaskManagerState/POST_RESPONSE';

// Action creators
export function reset() {
  return {type: RESET};
}

export function post() {
  return {
    type: POST_REQUEST
  };
}

export async function postNewTask() {
  return {
    type: POST_RESPONSE,
    payload: await postTask()
  };
}

// Reducer
export default function TaskManagerStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case RESET:
      return initialState;

    case POST_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(postTask)
      );

    case POST_RESPONSE:
      return state
        .set('loading', false)
        .set('newTask', action.payload);

    default:
      return state;
  }
}
