import {combineReducers} from 'redux-immutablejs';
import AppStateUpdater from '../state/AppState';
import CounterStateUpdater from '../state/counter/CounterState';

const namespacedReducer = combineReducers({
  counter: CounterStateUpdater
});

export default function mainReducer(state, action) {
  // on init, gather initial states from all reducers
  if (action.type === '@@redux/INIT') {
    /*eslint-disable no-undefined*/
    const initialState = undefined;
    /*eslint-enable no-undefined*/
    return AppStateUpdater(initialState, action).merge(namespacedReducer(initialState, action));
  }

  // on subsequent actions, allow AppStateUpdater to do global state update
  // across the state tree, and then apply any namespaced updates on top.
  const rootState = AppStateUpdater(state, action);
  return namespacedReducer(rootState, action);
}
