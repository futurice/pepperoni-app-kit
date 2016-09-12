import React, {PropTypes} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';
import styles from '../../../styles';
import * as TaskStateActions from '../TaskState';

const typeIcons = {
  domestic: require('../../../styles/icons/domestic.png'),
  errands: require('../../../styles/icons/errands.png'),
  handyman: require('../../../styles/icons/handyman.png'),
  informative: require('../../../styles/icons/informative.png'),
  miscellaneous: require('../../../styles/icons/miscellaneous.png'),
  physical_labor: require('../../../styles/icons/physical_labor.png')
};

const TaskDetailView = React.createClass({
  propTypes: {
    userId: PropTypes.number,
    task: PropTypes.object,
    loading: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
  },
  getInitialState() {
    return {};
  },
  assignTask() {
    const assignment = {
      taskId: this.props.task.taskId,
      userId: this.props.userId
    };
    this.props.dispatch(TaskStateActions.assignTask(assignment));
  },
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.container}>

            <Text style={styles.detailTitleText}>{this.props.task.taskName}</Text>
            <Text style={styles.detailTitleText}>@ Task Requester Name</Text>
            <Text style={styles.detailTitleText}>Requester Rating</Text>

            <View style={styles.detailSeperator} />

            <View style={styles.detailTypeSection}>
              <Image style = {styles.detailIcon}
                source={typeIcons[this.props.task.type.toLowerCase().replace(' ', '_')]}
              />
              <View style={styles.rightContainer}>
                <Text style={styles.detailTypeText}>{this.props.task.type}</Text>
                <Text style={styles.detailTypeText}>Level {this.props.task.difficulty} Difficulty</Text>
              </View>
            </View>

            <View style={styles.detailSeperator} />

            <Text style={styles.detailSubtitleText}>
              {moment(this.props.task.deadlineDate).format('MMMM Do YYYY')}
            </Text>
            <Text style={styles.detailSubtitleText}>{this.props.task.address}</Text>

            <View style={styles.detailSeperator} />

            <View style={styles.detailInfoContainer}>
              <Text style={styles.detailInfoText}>{this.props.task.desc}</Text>
            </View>

              <TouchableOpacity
                style={styles.button}
                onPress={this.assignTask}
              >
                <Text style={styles.buttonText}>
                  I can do it!
                </Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>
    );
  }
});

export default TaskDetailView;
