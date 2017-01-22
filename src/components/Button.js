import React, {PropTypes} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import * as theme from '../utils/theme';

export default React.createClass({
  displayName: 'Button',
  propTypes: {
    style: View.propTypes.style,
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
  },
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.action}
        style={[styles.button, this.props.style]}
        >
        <Text style={theme.fonts.button}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
});

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 40,
    backgroundColor: theme.colors.button,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selected: {
    backgroundColor: '#39babd'
  }
});
