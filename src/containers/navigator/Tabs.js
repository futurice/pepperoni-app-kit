import { TabNavigator } from 'react-navigation';

// ## View Imports ##
import WelcomeView from '../views/Welcome';

const TabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: 'white',
    style: { backgroundColor: '#39babd' },
  },
};

export default TabNavigator(
  {
    // ## TabNavigator Views ##
    Welcome: { screen: WelcomeView },
  },
  TabNavigatorConfig,
);
