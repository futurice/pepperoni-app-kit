import Calendar from 'react-native-calendar';
import React, {PropTypes} from 'react';
import {
  ScrollView
} from 'react-native';
import {
  Form,
  Separator,
  InputField,
  PickerField
} from 'react-native-form-generator';

// import * as NavigationState from '../../../modules/navigation/NavigationState';

/**
 * Sample view to demonstrate navigation patterns.
 * @TODO remove this module in a live application.
 */
const TaskFormView = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      background: '#FFFFFF'
    };
  },

  render() {

    return (
      <ScrollView>
        <Form ref='taskForm'
          onFocus={this.handleFormFocus}
          onChange={this.handleFormChange}
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
          <Separator />
          <InputField
            multiline={true}
            ref='address'
            placeholder='Task Address'
            helpText='Tell us where the task will done.'
          />
          <Calendar
          scrollEnabled={true}
          dayHeadings={['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']}
          weekStart={0}
          customStyle={{currentDayCircle: {backgroundColor: '#388E3C'}}}
         />
        </Form>
      </ScrollView>
    );
  }
});

export default TaskFormView;