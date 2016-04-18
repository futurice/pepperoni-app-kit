import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppView from './src/modules/AppView';

import React from 'react-native';

const Kindling = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <AppView />
      </Provider>
    );
  }
});

React.AppRegistry.registerComponent('Kindling', () => Kindling);
