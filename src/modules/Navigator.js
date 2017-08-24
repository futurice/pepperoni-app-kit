import React from 'react';
import {
  StackNavigator,
  TabNavigator,
  NavigationActions,
  addNavigationHelpers,
} from 'react-navigation';
import { connect } from 'react-redux';
import SettingsButton from '../components/SettingsButton';

// ## View Imports ##
import WelcomeView from './views/Welcome';
import CounterView from './views/Counter';
import SettingsView from './views/Settings';

export const TabView = TabNavigator({
  // ## TabNavigator Views ##
  Welcome: { screen: WelcomeView },
  Counter: { screen: CounterView },
});

const StackNavigatorConfig = {
  navigationOptions: ({ navigation }) => ({
    headerRight: (
      <SettingsButton
        onPress={() => navigation.navigate('Settings')}
        hidden={navigation.state.routeName === 'Settings'}
      />
    ),
  }),
};

export const Root = StackNavigator(
  {
    // ## StackNavigator Views ##
    Tabs: {
      screen: TabView,
      navigationOptions: { title: 'Welcome to Pepperoni!' },
    },
    Settings: { screen: SettingsView },
  },
  StackNavigatorConfig,
);

// Throw a helpful error message when the TabNavigator couldn't be found by name
const missingTabNavigator = `Error while handling back button press:

Route with name 'Tabs' was not found in the root of the navigation state.

If you have moved the 'Tabs' route, you need to:
  * Edit src/modules/Navigator.js
  * Update handleBackButton() so it knows
    where to find your TabNavigator
    (or make it ignore tabs altogether)`;

export const handleBackButton = ({ navigatorState }, dispatch) => {
  const tabNavigatorIndex = navigatorState.routes.findIndex(
    route => route.routeName === 'Tabs',
  );

  if (tabNavigatorIndex === -1) {
    throw new Error(missingTabNavigator);
  }

  const currentTab = navigatorState.routes[tabNavigatorIndex];
  const currentStackScreen = navigatorState;

  if (currentTab.index !== 0 || currentStackScreen.index !== 0) {
    dispatch(NavigationActions.back());
    return true;
  }

  // otherwise let OS handle the back button action
  return false;
};

const mapStateToProps = ({ navigatorState }) => ({ navigatorState });

export class NavigatorView extends React.Component {
  render = () =>
    <Root
      navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigatorState,
      })}
    />;
}

export default connect(mapStateToProps)(NavigatorView);
