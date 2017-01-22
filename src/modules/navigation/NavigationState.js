import {fromJS} from 'immutable';
import {NavigationExperimental} from 'react-native';
import {isNumber} from 'lodash';

const {StateUtils: NavigationStateUtils} = NavigationExperimental;

// Actions
const PUSH_ROUTE = 'NavigationState/PUSH_ROUTE';
const POP_ROUTE = 'NavigationState/POP_ROUTE';
const REPLACE_ROUTE = 'NavigationState/REPLACE_ROUTE';
const SWITCH_TAB = 'NavigationState/SWITCH_TAB';

export function switchTab(key) {
  return {
    type: SWITCH_TAB,
    payload: key
  };
}

// Action creators
export function pushRoute(route) {
  return {
    type: PUSH_ROUTE,
    payload: route
  };
}

export function replaceRoute(route) {
  return {
    type: REPLACE_ROUTE,
    payload: route
  };
}

export function popRoute() {
  return {type: POP_ROUTE};
}

// reducers for tabs and scenes are separate
const initialState = fromJS({
  tabs: {
    index: 0,
    routes: [
      {key: 'CityTab', title: 'City'},
      {key: 'ProfileTab', title: 'Profile'}
    ]
  },
  // Scenes for the `CityTab` tab.
  CityTab: {
    index: 0,
    routes: [{key: 'City', title: 'Choose a City'}]
  },
  // Scenes for the `LocationTab` tab.
  LocationTab: {
    index: 0,
    routes: [{key: 'Location', title: 'Location'}]
  },
  // Scenes for the `ProfileTab` tab.
  ProfileTab: {
    index: 0,
    routes: [{key: 'Profile', title: 'Profile'}]
  }
});


function updateCurrentSceneStack(state, updater) {
  // Push a route into the scenes stack.
  const tabs = state.get('tabs');
  const tabKey = tabs.getIn(['routes', tabs.get('index')]).get('key');
  const scenes = state.get(tabKey).toJS();
  let nextScenes;
  //fixes issue #52
  //the try/catch block prevents throwing an error when the route's key pushed
  //was already present. This happens when the same route is pushed more than once.
  try {
    nextScenes = updater(scenes);
  } catch (e) {
    nextScenes = scenes;
  }
  if (scenes !== nextScenes) {
    return state.set(tabKey, fromJS(nextScenes));
  }
  return state;
}


export default function NavigationReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_ROUTE: {
      return updateCurrentSceneStack(state, (stack) =>
        NavigationStateUtils.push(stack, action.payload)
      );
    }

    case REPLACE_ROUTE: {
      return updateCurrentSceneStack(state, (stack) =>
        NavigationStateUtils.replaceAtIndex(
          stack,
          stack.routes.length - 1,
          action.payload
        )
      );
    }

    case POP_ROUTE: {
      // Pops a route from the scenes stack.
      const tabs = state.get('tabs');
      const tabKey = tabs.getIn(['routes', tabs.get('index')]).get('key');
      const scenes = state.get(tabKey).toJS();
      const nextScenes = NavigationStateUtils.pop(scenes);
      if (scenes !== nextScenes) {
        return state.set(tabKey, fromJS(nextScenes));
      }
      return state;
    }

    case SWITCH_TAB: {
      // Switches the tab.
      const tabs = state.get('tabs').toJS();

      let nextTabs;
      try {
        nextTabs = isNumber(action.payload)
          ? NavigationStateUtils.jumpToIndex(tabs, action.payload)
          : NavigationStateUtils.jumpTo(tabs, action.payload);
      } catch (e) {
        nextTabs = tabs;
      }

      if (tabs !== nextTabs) {
        return state.set('tabs', fromJS(nextTabs));
      }
      return state;
    }

    default:
      return state;
  }
}
