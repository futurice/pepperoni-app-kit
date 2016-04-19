
import {NavigationExperimental as Navigation} from 'react-native';

// Actions
const PUSH_ROUTE = 'NavigationState/PUSH_ROUTE';
const POP_ROUTE = 'back'; //magic?

// Action creators
export function pushRoute(state) {
  return {
    type: PUSH_ROUTE,
    payload: state
  };
}

export function popRoute() {
  return {type: POP_ROUTE};
}

// Initial state
const initialState = {
  key: 'MainNavigation',
  index: 0,
  children: [
    {key: 'Counter'}
  ]
};

// Reducer

// We are using the higher-order reducer factories from
// NavigationExperimental instead of defining our own navigation
// state management. If this does not provide enough flexibility,
// you can define a standard Redux reducer, and implement state
// management with the help of NavigationStateUtils
//
// @NOTE the navigation state is NOT immutable
export default Navigation.Reducer.StackReducer({
  initialState,
  getPushedReducerForAction(actionProbe) {
    if (actionProbe.type === PUSH_ROUTE) {
      return function navigationReducer(state, action) {
        return action.payload;
      };
    }

    return null;
  }
});
