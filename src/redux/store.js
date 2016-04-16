import {applyMiddleware, createStore, compose} from 'redux';
import * as reduxLoop from 'redux-loop';

import middleware from './middleware';
import reducer from './reducer';

const enhancer = compose(
  applyMiddleware(...middleware),
  reduxLoop.install()
);

// create the store
const store = createStore(
  reducer,
  null,
  enhancer
);

export default store;
