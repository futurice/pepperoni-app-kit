import React, {PropTypes, Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

class CounterView extends Component {
  static displayName = 'LocationView';

  static propTypes = {
    office: PropTypes.number.isRequired,
    userName: PropTypes.string,
    userProfilePhoto: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    locationStateActions: PropTypes.shape({
      increment: PropTypes.func.isRequired,
      reset: PropTypes.func.isRequired,
      random: PropTypes.func.isRequired
    }).isRequired,
    navigationStateActions: PropTypes.shape({
      pushRoute: PropTypes.func.isRequired
    }).isRequired
  };

  increment = () => {
    this.props.locationStateActions.increment();
  };

  reset = () => {
    this.props.locationStateActions.reset();
  };

  random = () => {
    this.props.counterStateActions.random();
  };

  bored = () => {
    this.props.navigationStateActions.pushRoute({
      key: 'Color',
      title: 'Color Screen'
    });
  };

  renderUserInfo = () => {
    if (!this.props.userName) {
      return null;
    }

    return (
      <View style={styles.userContainer}>
        <Image
          style={styles.userProfilePhoto}
          source={{
            uri: this.props.userProfilePhoto,
            width: 80,
            height: 80
          }}
          />
        <Text style={styles.linkButton}>
          Welcome, {this.props.userName}!
        </Text>
      </View>
    );
  };

  render() {
    const loadingStyle = this.props.loading
      ? {backgroundColor: '#eee'}
      : null;

    return (
      <View style={styles.container}>

        {this.renderUserInfo()}

        <Text>
          Select your office:
        </Text>

        <TouchableOpacity
          accessible={true}
          accessibilityLabel={'Increment counter'}
          onPress={this.bored}
          style={[styles.counterButton, loadingStyle]}>
          <Text style={styles.counter}>
            London
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
            accessible={true}
            accessibilityLabel={'Reset counter'}
            onPress={this.bored}>
          <Text style={styles.linkButton}>
            Helsinki
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
            accessible={true}
            accessibilityLabel={'Randomize counter'}
            onPress={this.bored}>
          <Text style={styles.linkButton}>
            Berlin
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfilePhoto: {
    ...circle,
    alignSelf: 'center'
  },
  counterButton: {
    ...circle,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  counter: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    padding: 5
  },
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5
  }
});

export default LocationView;
