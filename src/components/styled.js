import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import PepperoniLogoAsset from '../../assets/pepperoni-logo.png';
import PepperoniIconAsset from '../../assets/pepperoni-icon.png';

export const Centered = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

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

export const Bold = styled.Text`font-weight: bold;`;

export const WelcomeText = styled.Text`
  color: #4b5c5d;
  font-size: 28;
  text-align: center;
  padding: 16px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #fff;
  margin: 16px;
`;

export const FlexRow = styled.View`flex-direction: row;`;

const statusBarPadding =
  Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const AppContainer = styled.View`
  flex: 1;
  padding-top: ${statusBarPadding};
`;
