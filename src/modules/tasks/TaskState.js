import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {getTasks} from '../../services/backScratchService';

// Initial state
const initialState = Map({
  value: [],
  loading: false,
  currentTask: {
    value: {},
    laoding: false
  }
});

// Actions
const TASKS_REQUEST = 'TaskState/TASKS_REQUEST';
const TASKS_RESPONSE = 'TaskState/TASKS_RESPONSE';
const SELECT_TASK = 'TaskState/SELECT_TASK';

// Action creators
export function selectTask(currTask) {
  return {
    type: SELECT_TASK,
    payload: currTask
  };
}

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
    case SELECT_TASK:
      return state
        .set('currentTask', fromJS({
          value: action.payload,
          loading: false
        }));

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
