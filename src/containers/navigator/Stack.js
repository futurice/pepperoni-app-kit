import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Header from './Header';

// ## View Imports ##
import Tabs from './Tabs';
import SettingsView from '../views/Settings';

const StackNavigatorConfig = {
  navigationOptions: {
    header: props => <Header {...props} />,
    headerStyle: {
      backgroundColor: '#39babd',
      elevation: 0, // disable header elevation when TabNavigator visible
    },
    headerTintColor: 'white',
  },
};

export default StackNavigator(
  {
    Tabs: {
      screen: Tabs,
      navigationOptions: { title: 'Welcome to Pepperoni!' },
    },
    Settings: { screen: SettingsView },
    // ## End StackNavigator Views ##
  },
  StackNavigatorConfig,
);
