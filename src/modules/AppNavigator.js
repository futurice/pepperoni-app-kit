import {TabNavigator} from 'react-navigation';

import CounterViewContainer from './counter/CounterViewContainer';
import ColorViewContainer from './colors/ColorViewContainer';

const AppNavigator = TabNavigator({
  Counter: {screen: CounterViewContainer},
  Color: {screen: ColorViewContainer}
});

export default AppNavigator;
