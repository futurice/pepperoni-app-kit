import React from 'react';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import PepperoniLogoAsset from '../../assets/pepperoni-logo.png';
import PepperoniIconAsset from '../../assets/pepperoni-icon.png';

export const PepperoniLogo = styled.Image.attrs({
  source: PepperoniLogoAsset,
  resizeMode: 'contain',
})`
  margin: 32px;
  align-self: center;
  width: 80%;
`;

export const PepperoniIcon = styled.Image.attrs({
  source: PepperoniIconAsset,
  resizeMode: 'contain',
})`
  width: 70px;
  height: 70px;
`;

export const Icon = styled(MaterialIcons).attrs({
  size: 32,
})`
  color: ${props => props.color || '#4b5c5d'};
`;

export const TouchablePadding = styled.TouchableOpacity`padding: 16px;`;

export class IconButton extends React.Component {
  render = () =>
    <TouchablePadding onPress={this.props.onPress}>
      <Icon name={this.props.name} />
    </TouchablePadding>;
}

export const CounterWrapper = styled.View`
  background-color: white;
  elevation: 4;
  align-items: center;
  margin: 8px;
`;

export const InputField = styled.TextInput`
  height: 50px;
  paddingHorizontal: 4px;
  fontSize: 20px;
`;
