import {fromJS} from 'immutable';

import Navigator from './Navigator';

// reducers for tabs and scenes are separate
const initialState = fromJS({
  index: 0,
  routes: [
    {key: 'home', routeName: 'Home', index: 0, routes: [
      {key: 'counter', routeName: 'Counter'},
      {key: 'color', routeName: 'Color'}
    ]},
    {key: 'infinite-color-stack', routeName: 'InfiniteColorStack'}
  ]
});

export default function AppNavigatorReducer(state = initialState, action) {
  const newState = Navigator.router.getStateForAction(action, state.toJS());
  return fromJS(newState || {});
}
