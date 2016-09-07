import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {getTasks} from '../../services/backScratchService';

// Initial state
const initialState = Map({
  value: [],
  loading: false
});

// Actions
const TASKS_REQUEST = 'TaskState/TASKS_REQUEST';
const TASKS_RESPONSE = 'TaskState/TASKS_RESPONSE';

// Action creators
export function tasks() {
  return {
    type: TASKS_REQUEST
  };
}

export async function requestTasks() {
  return {
    type: TASKS_RESPONSE,
    payload: await getTasks()
  };
}

// Reducer
export default function TasksStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TASKS_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(requestTasks)
      );

    case TASKS_RESPONSE:
      return state
        .set('loading', false)
        .set('value', action.payload);

    default:
      return state;
  }
}
