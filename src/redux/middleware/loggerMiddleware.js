import createLogger from 'redux-logger';

// log actions in development mode
export default createLogger({
  collapsed: true,

  // only log in development mode
  predicate: () => __DEV__
});
