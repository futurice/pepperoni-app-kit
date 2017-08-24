import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

export const Centered = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FlexRow = styled.View`flex-direction: row;`;

const statusBarPadding =
  Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const AppContainer = styled.View`
  flex: 1;
  padding-top: ${statusBarPadding};
`;
