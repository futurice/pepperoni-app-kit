import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import styled from 'styled-components/native';
import ReactNavigationHeader from 'react-navigation/lib/views/Header';

const statusBarPadding =
  Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const StatusBarPadding = styled.View`
  padding-top: ${statusBarPadding};
  background-color: ${props => props.backgroundColor};
  elevation: 0;
`;

export default class Header extends React.Component {
  getBackgroundColor = () => {
    const headerStyle = this.props.getScreenDetails(this.props.scene).options
      .headerStyle;

    if (!headerStyle || !headerStyle.backgroundColor) {
      // https://github.com/react-community/react-navigation/blob/681e1c6e3129b9adb3d7a5b5a0af2e4a06ab986b/src/views/Header/Header.js#L321
      return Platform.OS === 'ios' ? '#F7F7F7' : '#FFF';
    }

    return headerStyle.backgroundColor;
  };

  render = () =>
    <View>
      <StatusBarPadding backgroundColor={this.getBackgroundColor()} />
      <ReactNavigationHeader {...this.props} />
    </View>;
}
