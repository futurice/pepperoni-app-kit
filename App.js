import React from 'react';
import { BackHandler, ActivityIndicator, StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import persistStore from './src/utils/persist';
import Navigator, {
  handleBackButton,
} from './src/containers/navigator/Navigator';
import {
  Centered,
  FullscreenCentered,
  AppContainer,
} from './src/components/Layout';

export default class App extends React.Component {
  state = { rehydrated: false };

  componentDidMount = () => {
    persistStore(store, () => this.setState({ rehydrated: true }));
    BackHandler.addEventListener('hardwareBackPress', () =>
      handleBackButton(store.getState(), store.dispatch),
    );
  };

  renderActivityIndicator = () =>
    this.state.rehydrated
      ? null
      : <FullscreenCentered>
          <ActivityIndicator size="large" />
        </FullscreenCentered>;

  renderApp = () =>
    this.state.rehydrated
      ? <Provider store={store}>
          <Navigator />
        </Provider>
      : null;

  render = () =>
    <AppContainer>
      {this.renderActivityIndicator()}
      {this.renderApp()}
    </AppContainer>;
}
