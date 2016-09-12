import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {postTask} from '../../../services/backScratchService';
// Initial state
const initialState = Map({
  createdTask: {},
  loading: false
});

// Actions
const POST_REQUEST = 'TaskFormState/POST_REQUEST';
const POST_RESPONSE = 'TaskFormState/POST_RESPONSE';

// ----------- https://github.com/redux-loop/redux-loop --------------
// Action creators
export function post(task) {
  return {
    type: POST_REQUEST,
    payload: task
  };
}

export async function createNewTask(task) {
  return {
    type: POST_RESPONSE,
    payload: await postTask(task)
  };
}

// Reducer
export default function TaskFormStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case POST_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(createNewTask, action.payload)
      );

    case POST_RESPONSE:
      return state
        .set('loading', false)
        .set('createTask', action.payload);

    default:
      return state;
  }
}
