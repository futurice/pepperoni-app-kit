import React from 'react';
import styled from 'styled-components/native';

import { Platform, StatusBar, ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contentContainerStyle: {
    minHeight: '100%',
    justifyContent: 'center',
  },
});

export const ViewContainer = styled.ScrollView.attrs({
  contentContainerStyle: styles.contentContainerStyle,
})`
`;

export const Centered = styled.View`
  align-items: center;
  justify-content: center;
`;

export const FullscreenCentered = Centered.extend`flex: 1;`;

export const FlexRow = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const AppContainer = styled.View`flex: 1;`;
