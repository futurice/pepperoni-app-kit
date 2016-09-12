import {Map} from 'immutable';
import {combineReducers} from 'redux-loop';
import NavigationStateReducer from '../modules/navigation/NavigationState';
import AuthStateReducer from '../modules/auth/AuthState';
import CounterStateReducer from '../modules/counter/CounterState';
import SessionStateReducer, {RESET_STATE} from '../modules/session/SessionState';
import TaskStateReducer from '../modules/tasks/TaskState';
import TaskManagerStateReducer from '../modules/taskManager/TaskManagerState';
import TaskFormStateReducer from '../modules/taskManager/taskForm/TaskFormState';
import UserStateReducer from '../modules/user/UserState';

const reducers = {
  // Authentication/login state
  auth: AuthStateReducer,

  // Counter sample app state. This can be removed in a live application
  counter: CounterStateReducer,

  // @NOTE: By convention, the navigation state must live in a subtree called
  //`navigationState`
  navigationState: NavigationStateReducer,

  session: SessionStateReducer,

  tasks: TaskStateReducer,

  taskManger: TaskManagerStateReducer,

  taskForm: TaskFormStateReducer,

  user: UserStateReducer

};

// initial state, accessor and mutator for supporting root-level
// immutable data with redux-loop reducer combinator
const immutableStateContainer = Map();
const getImmutable = (child, key) => child ? child.get(key) : void 0;
const setImmutable = (child, key, value) => child.set(key, value);

const namespacedReducer = combineReducers(
  reducers,
  immutableStateContainer,
  getImmutable,
  setImmutable
);

export default function mainReducer(state, action) {
  if (action.type === RESET_STATE) {
    return namespacedReducer(action.payload, action);
  }

  return namespacedReducer(state || void 0, action);
}
