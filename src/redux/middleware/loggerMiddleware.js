import createLogger from 'redux-logger';

// log actions in development mode
export default createLogger({
  collapsed: true,

  // only log in development mode
  predicate: () => __DEV__,

  // transform immutable state to plain objects
  stateTransformer: state => state.toJS(),

  // transform immutable action payloads to plain objects
  actionTransformer: action =>
    action && action.payload && action.payload.toJS
      ? {...action, payload: action.payload.toJS()}
      : action
});
