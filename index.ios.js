import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppViewContainer from './src/modules/AppViewContainer';

import React from 'react-native';

const Kindling = React.createClass({

  render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    );
  }
});

React.AppRegistry.registerComponent('Kindling', () => Kindling);
