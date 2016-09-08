import * as ProfileState from './ProfileState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

const ProfileView = React.createClass({
  propTypes: {
    userName: PropTypes.string,
    userId: PropTypes.string,
    userProfilePhoto: PropTypes.string,
    coins: PropTypes.number,
    stars: PropTypes.number,
    requestedTasks: PropTypes.array,
    assignedTasks: PropTypes.array,
    bio: PropTypes.string,
    tasksCompleted: PropTypes.number,
    loading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  },
  reset() {
    this.props.dispatch(ProfileState.reset());
  },
  renderUserInfo() {
    if (!this.props.userName) {
      return (
        <View>
          <Text style={styles.linkButton}>
            Please log in to see your profile.
          </Text>
        </View>
      );
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
  },
  render() {
    return (
      <View style={styles.container}>

        {this.renderUserInfo()}

        <TouchableOpacity onPress={this.reset}>
          <Text style={styles.linkButton}>
            Button 1
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
});

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

export default ProfileView;
