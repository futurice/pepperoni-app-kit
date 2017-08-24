import React from 'react';
import { Title, Bold } from '../../components/styled/Text';
import { Centered } from '../../components/styled/Layout';
import { Button } from '../../components/styled/Branding';

export default class SettingsView extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render = () =>
    <Centered>
      <Title>
        <Bold>Hello, world!</Bold>
      </Title>
      <Title>This is a sample settings view.</Title>
    </Centered>;
}
