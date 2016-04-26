import {NavigationExperimental as Navigation} from 'react-native';

// Actions
const PUSH_ROUTE = 'NavigationState/PUSH_ROUTE';
const POP_ROUTE = 'NavigationState/POP_ROUTE';
const SWITCH_TAB = 'NavigationState/SWITCH_TAB';

export function switchTab(index) {
  return {
    type: SWITCH_TAB,
    payload: index
  };
}

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

const initialState = createNavigationState('MainNavigation', 'App', [
  createNavigationState('HomeTab', 'Home', [{key: 'Counter', title: 'Counter'}]),
  createNavigationState('ProfileTab', 'Profile', [{key: 'Color', title: 'Color'}])
]);

export default function NavigationReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_ROUTE: {
      return changeStateInTab(state, state.index,
        tabState => Navigation.StateUtils.push(tabState, action.payload));
    }
    case POP_ROUTE: {
      return changeStateInTab(state, state.index,
        tabState => Navigation.StateUtils.pop(tabState, action.payload));
    }
    case SWITCH_TAB: {
      const index = action.payload;
      return {...state, index};
    }
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

// Helper for updating child navigator state
function changeStateInTab(state, index, mutator) {
  const selectedTab = state.children[index];
  return {
    ...state,
    children: state.children.map(tabState => {
      return tabState === selectedTab
        ? mutator(tabState)
        : tabState;
    })
  };
}
