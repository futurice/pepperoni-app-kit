import {loop, combineReducers} from 'redux-loop-symbol-ponyfill';
import NavigationStateReducer from '../modules/navigation/NavigationState';
import CounterStateReducer from '../modules/counter/CounterState';
import SessionStateReducer, {RESET_STATE} from '../modules/session/SessionState';

const reducers = {
  // Counter sample app state. This can be removed in a live application
  counter: CounterStateReducer,

  // @NOTE: By convention, the navigation state must live in a subtree called
  //`navigationState`
  navigationState: NavigationStateReducer,

  session: SessionStateReducer

};

const namespacedReducer = combineReducers(reducers);

export default function mainReducer(state, action) {
  const [nextState, effects] = action.type === RESET_STATE
    ? namespacedReducer(action.payload, action)
    : namespacedReducer(state || void 0, action);

  return loop(nextState, effects);
}
