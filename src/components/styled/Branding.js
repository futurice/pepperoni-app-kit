import styled from 'styled-components/native';

import PepperoniLogoAsset from '../../assets/pepperoni-logo.png';
import PepperoniIconAsset from '../../assets/pepperoni-icon.png';

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

export const Button = styled.TouchableOpacity`
  background-color: #fff;
  margin: 16px;
`;
