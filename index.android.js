import 'es6-symbol/implement';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppView from './src/modules/AppView';
import React, {BackAndroid} from 'react-native';
import * as NavigationStateActions from './src/modules/navigation/NavigationState';
import * as auth0 from './src/services/auth0';

const Kindling = React.createClass({

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.navigateBack);
  },

  componentDidMount() {
    auth0.showLogin();
  },

  navigateBack() {
    const navigationState = store.getState().get('navigationState');
    if (navigationState.index === 0) {
      return false;
    }

    store.dispatch(NavigationStateActions.popRoute());
    return true;
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
