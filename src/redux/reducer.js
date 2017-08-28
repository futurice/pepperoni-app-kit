import { combineReducers } from 'redux';

// ## Reducer Imports ##
import NavigatorStateReducer from '../state/navigator';

export default combineReducers({
  // ## Reducers ##

  // Navigator state
  navigatorState: NavigatorStateReducer,
});
