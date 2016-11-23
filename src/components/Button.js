import React, {PropTypes} from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import * as theme from '../utils/theme';

export default React.createClass({
  displayName: 'Button',
  propTypes: {
    style: View.propTypes.style,
    textStyle: Text.propTypes.style,
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
  },
  render() {
    return (
      <TouchableOpacity onPress={this.props.action} style={[theme.buttons.basic, this.props.style]}>
        <Text style={[theme.fonts.button, this.props.textStyle]}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
});
