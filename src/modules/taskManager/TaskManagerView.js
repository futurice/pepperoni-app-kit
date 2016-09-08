import * as TaskManagerState from './TaskManagerState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import styles from '../../styles';

const CounterView = React.createClass({
  propTypes: {
    counter: PropTypes.number.isRequired,
    userName: PropTypes.string,
    userProfilePhoto: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  },
  navToForm() {
    this.props.dispatch(NavigationState.pushRoute({
      key: 'NewTask',
      title: 'Create a new task'
    }));
  },
  post() {
    this.props.dispatch(TaskManagerState.post());
  },
  render() {
    const loadingStyle = this.props.loading
      ? {backgroundColor: '#eee'}
      : null;

    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={this.navToForm} accessible={true} style={styles.button}>
          <Text style={styles.linkButton}>
            Create a task
          </Text>
        </TouchableOpacity>

        <Text style={styles.coinText}>
          Coins left:
        </Text>

      </View>
    );
  }
});

export default CounterView;
