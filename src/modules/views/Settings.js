import React from 'react';
import { Centered, WelcomeText, Bold } from '../../components/styled';

export default class SettingsView extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render = () =>
    <Centered>
      <WelcomeText>
        <Bold>Hello, world!</Bold>
      </WelcomeText>
      <WelcomeText>This is a sample settings view. TODO!</WelcomeText>
    </Centered>;
}
