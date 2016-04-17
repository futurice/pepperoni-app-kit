import {Provider} from 'react-redux';
import store from './src/redux/store';
import CounterViewContainer from './src/views/CounterViewContainer';

import React from 'react-native';

const Kindling = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <CounterViewContainer />
      </Provider>
    );
  }
});

React.AppRegistry.registerComponent('Kindling', () => Kindling);
