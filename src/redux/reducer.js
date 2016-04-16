import {Map} from 'immutable';
import {combineReducers} from 'redux-loop';
import AppStateUpdater from '../state/AppState';
import CounterStateUpdater from '../state/counter/CounterState';

const reducers = {
  counter: CounterStateUpdater
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
    return AppStateUpdater(state, action).merge(namespacedReducer(state, action));
  }

  // on subsequent actions, allow AppStateUpdater to do global state update
  // across the state tree, and then apply any namespaced updates on top.
  const rootState = AppStateUpdater(state, action);
  return namespacedReducer(rootState, action);
}
