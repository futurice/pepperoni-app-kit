import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppView from './src/modules/AppView';

<<<<<<< HEAD
import React from 'react-native';
=======
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as ENV from './env';

const Auth0Lock = require('react-native-lock');

class Kindling extends Component {
  componentDidMount() {
    this.login();
  }

  constructor(props) {
    super(props);
    this.state = {
      profile: { name: 'Guest' },
      token: '',
      isLoggedIn: false
    };
  }

  login = () => {
    const lock = new Auth0Lock({clientId: ENV.AUTH0_CLIENT_ID, domain: ENV.AUTH0_NAMESPACE});

    lock.show({
        closable: true
      }, (err, profile, token) => {
        if (err) {
          console.log(err);
          return;
        }
        // Authentication worked!
        console.log('Logged in with Auth0!');
        this.setState({
          profile: profile,
          token: token,
          isLoggedIn: true
        })
      }
    );
  }
>>>>>>> 8e35362... Set guest name when not logged in

const Kindling = React.createClass({
  render() {
    return (
<<<<<<< HEAD
      <Provider store={store}>
        <AppView />
      </Provider>
=======
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native, {this.state.profile.name}!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
>>>>>>> 8e35362... Set guest name when not logged in
    );
  }
});

React.AppRegistry.registerComponent('Kindling', () => Kindling);
