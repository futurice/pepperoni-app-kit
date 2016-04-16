import {applyMiddleware, createStore, compose} from 'redux';
import * as reduxLoop from 'redux-loop';

import middleware from './middleware';
import reducer from './reducer';

// compose redux store enhancers here
const installEnhancers = compose(
  reduxLoop.install
);

// register middlewares defined in the redux/middleware module
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

// create the store
const store = createStoreWithMiddleware(
  reducer,
  null,
  installEnhancers()
);

export default store;
