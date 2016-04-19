import React from 'react-native';
import NavigationViewContainer from './navigation/NavigationViewContainer';
import AppRouter from './AppRouter';

const AppView = () => (
  <NavigationViewContainer router={AppRouter} />
);

export default AppView;
