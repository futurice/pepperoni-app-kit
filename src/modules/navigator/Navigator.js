import { Platform } from 'react-native';
import { createTabNavigator, createStackNavigator } from 'react-navigation';

import CounterViewContainer from '../counter/CounterViewContainer';
import ColorViewContainer from '../colors/ColorViewContainer';

const headerColor = '#39babd';
const activeColor = 'white';

// TabNavigator is nested inside StackNavigator
export const MainScreenNavigator = createTabNavigator({
  Counter: { screen: CounterViewContainer },
  Color: { screen: ColorViewContainer }
}, {
    tabBarOptions: {
      ...Platform.select({
        android: {
          activeTintColor: activeColor,
          indicatorStyle: { backgroundColor: activeColor },
          style: { backgroundColor: headerColor }
        }
      })
    }
  });

MainScreenNavigator.navigationOptions = {
  title: 'Pepperoni App Template',
  headerTitleStyle: { color: 'white' },
  headerStyle: {
    backgroundColor: headerColor,
    elevation: 0 // disable header elevation when TabNavigator visible
  }
};

// Root navigator is a StackNavigator
const AppNavigator = createStackNavigator({
  Home: { screen: MainScreenNavigator },
  InfiniteColorStack: { screen: ColorViewContainer }
});

export default AppNavigator;
