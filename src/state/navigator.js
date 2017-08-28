import { RootNavigator } from '../containers/navigator/Navigator';

export default (state, action) =>
  RootNavigator.router.getStateForAction(action, state);
