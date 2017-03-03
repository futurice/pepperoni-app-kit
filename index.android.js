import 'es6-symbol/implement';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppViewContainer from './src/modules/AppViewContainer';
import React, {Component} from 'react';
import {AppRegistry, BackAndroid} from 'react-native';
import {NavigationActions} from 'react-navigation';

class PepperoniAppTemplate extends Component {
  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.navigateBack);
  }

  // TODO: Android back button
  navigateBack() {
    store.dispatch(NavigationActions.back());
    return true;

    /*
    const navigatorState = store.getState().get('navigatorState');
    const tabs = navigatorState.get('tabs');
    const tabKey = tabs.getIn(['routes', tabs.get('index')]).get('key');
    const currentTab = navigatorState.get(tabKey);

    // if we are in the beginning of our tab stack
    if (currentTab.get('index') === 0) {

      // if we are not in the first tab, switch tab to the leftmost one
      if (tabs.get('index') !== 0) {
        store.dispatch(NavigationStateActions.switchTab(0));
        return true;
      }

      // otherwise let OS handle the back button action
      return false;
    }

    store.dispatch(NavigationStateActions.popRoute());
    return true;
    */
  }

  render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PepperoniAppTemplate', () => PepperoniAppTemplate);
