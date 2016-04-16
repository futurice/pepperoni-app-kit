import * as CounterState from '../state/counter/CounterState';
import React, {
  PropTypes,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

const CounterView = React.createClass({
  propTypes: {
    counter: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  },
  increment() {
    this.props.dispatch(CounterState.increment());
  },
  reset() {
    this.props.dispatch(CounterState.reset());
  },
  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={this.increment} style={styles.counterButton}>
          <Text style={styles.counter}>
            {this.props.counter}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.reset}>
          <Text style={styles.resetButtonText}>
            Reset
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  counterButton: {
    backgroundColor: 'green',
    borderWidth: 0,
    borderRadius: 40,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  counter: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  resetButtonText: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 5
  }
});

export default CounterView;
