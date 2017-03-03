import {fromJS} from 'immutable';

import AppNavigator from './Navigator';

export default function NavigatorReducer(state, action) {
  const newState = AppNavigator.router.getStateForAction(action, state && state.toJS());
  return fromJS(newState || {});
}
