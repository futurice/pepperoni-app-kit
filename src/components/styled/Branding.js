import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import PepperoniLogoAsset from '../../../assets/pepperoni-logo.png';
import PepperoniIconAsset from '../../../assets/pepperoni-icon.png';

export const PepperoniLogo = styled.Image.attrs({
  source: PepperoniLogoAsset,
  resizeMode: 'contain',
})`
  align-self: center;
  width: 80%;
`;

export const PepperoniIcon = styled.Image.attrs({
  source: PepperoniIconAsset,
  resizeMode: 'contain',
})`
  flex: 1;
  width: 70px;
`;

export const Icon = styled(MaterialIcons).attrs({
  size: 32,
})`
  color: ${props => props.color || '#4b5c5d'};
`;

export class IconButton extends React.Component {
  render = () =>
    <TouchableOpacity style={{ padding: 16 }} onPress={this.props.onPress}>
      <Icon name={this.props.name} />
    </TouchableOpacity>;
}

export const CounterWrapper = styled.View`
  background-color: white;
  elevation: 4;
  align-items: center;
  margin: 8px;
`;
