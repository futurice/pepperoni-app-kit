import 'es6-symbol/implement';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppView from './src/modules/AppView';

import React from 'react-native';
import * as auth0 from './src/services/auth0';

const Kindling = React.createClass({
  componentDidMount() {
    // auth0.showLogin();
  },

  render() {
    return (
      <Provider store={store}>
        <AppView />
      </Provider>
    );
  }
});

React.AppRegistry.registerComponent('Kindling', () => Kindling);
