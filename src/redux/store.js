import {applyMiddleware, createStore, compose} from 'redux';
import * as reduxLoop from 'redux-loop';
import middleware from './middleware';
import reducer from './reducer';

let enhancers = [
  applyMiddleware(...middleware),
  reduxLoop.install()
];

if (process.env.NODE_ENV !== 'production') {
  let devTools = require('remote-redux-devtools');
  enhancers = [...enhancers, devTools()];
}

const enhancer = compose(...enhancers);

// create the store
const store = createStore(
  reducer,
  null,
  enhancer
);

export default store;
