import React from 'react';
import { PepperoniLogo, Title, Bold } from '../../components/styled/Branding';
import { Centered } from '../../components/styled/Layout';

export default class WelcomeView extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render = () =>
    <Centered>
      <PepperoniLogo />
      <Title>
        <Bold>Hello, world!</Bold>
      </Title>
      <Title>
        This is a sample view from the <Bold>Pepperoni app kit</Bold>.
      </Title>
    </Centered>;
}
