// import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import styles from '../../../styles';

const TaskDetailView = React.createClass({
  propTypes: {
  },
  getInitialState() {
    return {};
  },
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>

          <Text style={styles.detailTitleText}>Task Name</Text>
          <Text style={styles.detailTitleText}> @ Task Requester Name</Text>
          <Text style={styles.detailTitleText}>Requester Rating</Text>

          <View style={styles.detailSeperator} />

          <Text style={styles.detailSubtitleText}>Task Type</Text>
          <Text style={styles.detailSubtitleText}>Task Time</Text>
          <Text style={styles.detailSubtitleText}>Task Location</Text>
          <Text style={styles.detailSubtitleText}>Task Difficulty</Text>

          <View style={styles.detailSeperator} />

          <View style={styles.detailInfoContainer}>
            <Text style={styles.detailInfoText}>Task DescriptionTask DescriptionTask DescriptionTas
            Task DescriptionTask DescriptionTask DescriptionTask DescriptionTask Description
            Task DescriptionTask DescriptionTask DescriptionTask DescriptionTask DescriptionTask
            Task DescriptionTask DescriptionTask DescriptionTask DescriptionTask Description
            </Text>
          </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                I can do it!
              </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    );
  }
});

export default TaskDetailView;
