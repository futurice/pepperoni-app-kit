import React from 'react';
import { Title, Description } from '../../components/styled/Text';
import { ViewContainer } from '../../components/styled/Layout';

export default class SettingsView extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render = () =>
    <ViewContainer>
      <Title>Hello, world!</Title>
      <Description>This is a sample settings view.</Description>
    </ViewContainer>;
}
