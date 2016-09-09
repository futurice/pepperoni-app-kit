// import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
import {
  Text,
  View,
  ListView,
  ActivityIndicator
} from 'react-native';
import styles from '../../../styles';
import ListItemWithIcon from '../../../components/ListItemWithIcon';

const TaskDetailView = React.createClass({
  propTypes: {
  },
  getInitialState() {
    return {};
  },
  render() {
    return (
      <View>
        <Text>Task Detail</Text>
      </View>
    );
  }
});

export default TaskDetailView;
