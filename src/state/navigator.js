import { Root } from '../modules/Navigator';

export default (state, action) => Root.router.getStateForAction(action, state);
