import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native';

const CreateTaskForm = React.createClass({
  getInitialState() {
    return {
      address: '',
      taskName: '',
      desc: '',
      type: '',
      difficuly: '',
      creationDate: '',
      deadlineDate: ''
    };
  },
  render() {
    return (
      <View>
        <Text>
          Form
        </Text>
        <TextInput
          placeholder='Task Address'
          style={styles.input}
          onChange={(event) => this.setState({address: event.nativeEvent.text})}
          value={this.state.address} />
        <TextInput
          placeholder='Task Name'
          style={styles.input}
          onChange={(event) => this.setState({taskName: event.nativeEvent.text})}
          value={this.state.taskName} />
        <TextInput
          placeholder='Task Description'
          style={styles.input}
          onChange={(event) => this.setState({desc: event.nativeEvent.text})}
          value={this.state.desc} />
        <TextInput
          placeholder='Task Type'
          style={styles.input}
          onChange={(event) => this.setState({type: event.nativeEvent.text})}
          value={this.state.type} />
        <TextInput
          placeholder='Task Difficulty'
          style={styles.input}
          onChange={(event) => this.setState({difficuly: event.nativeEvent.text})}
          value={this.state.difficuly} />
        <TextInput
          placeholder='Task Deadline'
          style={styles.input}
          onChange={(event) => this.setState({deadlineDate: event.nativeEvent.text})}
          value={this.state.deadlineDate} />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1
  }
});

export default CreateTaskForm;
