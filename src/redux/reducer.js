import {Map} from 'immutable';
import {combineReducers} from 'redux-loop';
import NavigationStateReducer from '../modules/navigation/NavigationState';
import AppStateReducer from '../modules/AppState';
import CounterStateReducer from '../modules/counter/CounterState';

const reducers = {
  // Counter sample app state. This can be removed in a live application
  counter: CounterStateReducer,

  // @NOTE: By convention, the navigation state must live in a subtree
  // called `navigationState`
  navigationState: NavigationStateReducer
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
  // on init, gather initial states from all reducers
  if (action.type === '@@ReduxLoop/INIT') {
    return AppStateReducer(state, action)
      .merge(namespacedReducer(state, action));
  }

  // on subsequent actions, allow AppStateReducer to do global state update
  // across the state tree, and then apply any namespaced updates on top.
  const rootState = AppStateReducer(state, action);
  return namespacedReducer(rootState, action);
}
