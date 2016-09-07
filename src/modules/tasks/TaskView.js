import * as TaskState from './TaskState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ListView,
  ActivityIndicator
} from 'react-native';
import ListItemWithIcon from '../../components/ListItemWithIcon';

const TaskView = React.createClass({
  propTypes: {
    tasks: PropTypes.array,
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
  bored() {
    this.props.dispatch(NavigationState.pushRoute({
      key: 'Color',
      title: 'Color Screen'
    }));
  },
  renderUserInfo() {
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
  },
  renderLoadingView() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size='large' />
        <Text>Loading Tasks...</Text>
      </View>
    );
  },
  renderListView() {
    return (
      <View style={styles.container}>

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
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default TaskView;
