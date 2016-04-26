import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppView from './src/modules/AppView';

import React from 'react-native';
import * as auth0 from './src/services/auth0';
import {saveSnapshot, resetSnapshot} from './src/utils/snapshot';

const Kindling = React.createClass({
  componentDidMount() {

    resetSnapshot()
      .then(snapshot => {
        if (snapshot) {
          store.dispatch({
            type: '@@snapshot/reset',
            payload: snapshot
          });
        }

        if (!snapshot || !snapshot.getIn(['auth', 'isLoggedIn'])) {
          auth0.showLogin();
        }

        store.subscribe(() => {
          saveSnapshot(store.getState());
        });
      });
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
