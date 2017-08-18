import React from 'react';
import { TouchableOpacity } from 'react-native';
import { PepperoniIcon } from './styled';

export default class SettingsButton extends React.Component {
  render = () =>
    this.props.hidden
      ? null
      : <TouchableOpacity onPress={this.props.onPress}>
          <PepperoniIcon />
        </TouchableOpacity>;
}
