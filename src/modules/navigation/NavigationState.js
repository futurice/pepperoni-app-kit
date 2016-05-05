import {fromJS} from 'immutable';

// Actions
const PUSH_ROUTE = 'NavigationState/PUSH_ROUTE';
const POP_ROUTE = 'NavigationState/POP_ROUTE';
const SWITCH_TAB = 'NavigationState/SWITCH_TAB';
const NAVIGATION_COMPLETED = 'NavigationState/NAVIGATION_COMPLETED';

export function switchTab(index) {
  return {
    type: SWITCH_TAB,
    payload: index
  };
}

// Action creators
export function pushRoute(state) {
  return (dispatch, getState) => {
    // conditionally execute push to avoid double
    // navigations due to impatient users
    if (!isNavigationAnimationInProgress(getState())) {
      dispatch({type: PUSH_ROUTE, payload: state});
    }
  };
}

export function popRoute() {
  return {type: POP_ROUTE};
}

export function navigationCompleted() {
  return {type: NAVIGATION_COMPLETED};
}

const initialState = fromJS(
  createNavigationState('MainNavigation', 'App', [
    createNavigationState('HomeTab', 'Home', [{key: 'Counter', title: 'Counter'}]),
    createNavigationState('ProfileTab', 'Profile', [{key: 'Color', title: 'Color'}])
  ]));

export default function NavigationReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_ROUTE:
      return state
        .set('isNavigating', true)
        .updateIn(['children', state.get('index')], tabState =>
          tabState
            .update('children', children => children.push(fromJS(action.payload)))
            .set('index', tabState.get('children').size));

    case POP_ROUTE:
      return state
        .set('isNavigating', true)
        .updateIn(['children', state.get('index')], tabState =>
          tabState
            .update('children', children => children.pop())
            .set('index', tabState.get('children').size - 2));

    case SWITCH_TAB:
      return state.set('index', action.payload);

    case NAVIGATION_COMPLETED:
      return state.set('isNavigating', false);

    default:
      return state;
  }
}

// Helper for creating a state object compatible with the
// RN NavigationExperimental navigator
function createNavigationState(key, title, children) {
  return {
    key,
    title,
    index: 0,
    children
  };
}

function isNavigationAnimationInProgress(state) {
  return state.getIn(['navigationState', 'isNavigating']);
}
