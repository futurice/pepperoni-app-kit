import {fromJS} from 'immutable';

import AppNavigator from '../AppNavigator';

// reducers for tabs and scenes are separate
const initialState = fromJS({
  index: 0,
  routes: [
    {key: 'counter', routeName: 'Counter'},
    {key: 'color', routeName: 'Color'}
  ]
});

export default function NavigationReducer(state = initialState, action) {
  const newState = AppNavigator.router.getStateForAction(action, state.toJS());
  return fromJS(newState || {});
}
