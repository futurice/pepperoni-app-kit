
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

export default function NavigationReducer(state = initialState, action) {
  console.log('action', action);
  switch (action.type) {
    case PUSH_ROUTE:
      return Navigation.StateUtils.push(state, action.payload);
    case POP_ROUTE:
      return Navigation.StateUtils.pop(state, action.payload);
    default:
      return state;
  }
}
