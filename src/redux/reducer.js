import { combineReducers } from 'redux';

// ## Reducer Imports ##
import NavigatorStateReducer from '../state/navigator';
import CounterStateReducer from '../state/counter';

export default combineReducers({
  // ## Reducers ##

  // Navigator state
  navigatorState: NavigatorStateReducer,

  // Counter state
  counter: CounterStateReducer,
});
