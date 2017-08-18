import React from 'react';
import {
  PepperoniLogo,
  Centered,
  WelcomeText,
  Bold,
} from '../../components/styled';

export default class WelcomeView extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render = () =>
    <Centered>
      <PepperoniLogo />
      <WelcomeText>
        <Bold>Hello, world!</Bold>
      </WelcomeText>
      <WelcomeText>
        This is a sample view from the <Bold>Pepperoni app kit</Bold>.
      </WelcomeText>
    </Centered>;
}
