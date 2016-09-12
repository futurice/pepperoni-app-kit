import * as TaskState from '../tasks/TaskState';
import * as TaskManagerState from './TaskManagerState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ListView,
  ActivityIndicator
} from 'react-native';
import ListItemWithIcon from '../../components/ListItemWithIcon';
import styles from '../../styles';

const CounterView = React.createClass({
  propTypes: {
    tasks: PropTypes.array,
    counter: PropTypes.number.isRequired,
    userName: PropTypes.string,
    userProfilePhoto: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  },
  componentDidMount() {
    this.tasks();
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.tasks !== this.props.tasks) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this._getListViewData(nextProps.tasks))
      });
    }
  },
  _getListViewData(tasks) {
    return tasks.map(item => item.task.properties);
  },
  tasks() {
    this.props.dispatch(TaskState.tasks());
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
  renderLoadingView() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size='large' color='#FF4081' style={styles.loadCircle}/>
        <Text style={styles.loadText}>Loading Tasks...</Text>
      </View>
    );
  },
  renderListView() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={this.navToForm} accessible={true} style={styles.button}>
          <Text style={styles.buttonText}>
            Create a task
          </Text>
        </TouchableOpacity>

        <Text style={styles.coinText}>
          Coins left:
        </Text>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={ListItemWithIcon}
        />

      </View>
    );
  },
  render() {
    return this.props.loading
      ? this.renderLoadingView()
      : this.renderListView();
  }
});

export default CounterView;
