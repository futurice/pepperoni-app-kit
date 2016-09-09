import * as TaskFormState from './TaskFormState';
import Calendar from 'react-native-calendar';
import React, {PropTypes} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text
} from 'react-native';
import {
  Form,
  Separator,
  InputField,
  PickerField
} from 'react-native-form-generator';
import styles from '../../../styles';

const TaskFormView = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    return {};
  },

  handleFormFocus() {
    // phone keyboard pop up on focus
  },

  submitTask() {

    let isFormValid = this.refs.taskForm.values.taskName &&
           this.refs.taskForm.values.desc &&
           this.refs.taskForm.values.type &&
           this.refs.taskForm.values.difficulty &&
           this.refs.taskForm.values.address;

    if (isFormValid) {
      let formData = this.refs.taskForm.values;
      this.props.dispatch(TaskFormState.post(formData));
      console.log(formData);
    }
  },

  render() {

    return (
      <ScrollView>
        <Form ref='taskForm'
          onFocus={this.handleFormFocus}
        >
          <InputField
            ref='taskName'
            placeholder='Task Name'
            helpText='Give your task a short but informative name, like Ex: Need help mowing my lawn.'
          />
          <InputField
            multiline={true}
            ref='desc'
            placeholder='Task Description'
            helpText={'Add a short descripition of what the task will entail. Be straightforward so other users can see if they can help!'}
          />
          <PickerField
            ref='type'
            label='Task Category'
            options={{
              '': '',
              handyman: 'Handyman',
              errands: 'Errands',
              domestic: 'Domestic',
              physicalLabor: 'Physical Labor',
              informative: 'Informative',
              misc: 'Miscellaneous'
            }}
            helpText='Pick the Category that your task best falls under.'
          />
          <PickerField
            ref='difficulty'
            label='Task Difficulty'
            options={{
              '': '',
              '1': '1',
              '2': '2',
              '3': '3'
            }}
            helpText='Be Honest. Gauge how difficult it will be to complete this task.'
          />
          <Separator />
          <InputField
            ref='address'
            multiline={true}
            placeholder='Task Address'
            helpText='Tell us where the task will done.'
          />
          <Calendar
            ref='deadlineDate'
            scrollEnabled={true}
            dayHeadings={['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']}
            weekStart={0}
            customStyle={{currentDayCircle: {backgroundColor: '#388E3C'}}}
         />
        </Form>
        <TouchableOpacity onPress={this.submitTask} accessible={true} style={styles.button}>
          <Text style={styles.linkButton}>
            Create a task
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
});

export default TaskFormView;
