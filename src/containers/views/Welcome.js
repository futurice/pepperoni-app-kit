import React from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { PepperoniLogo, IconButton } from '../../components/styled/Branding';
import { Title, Description, Bold } from '../../components/styled/Text';
import { ViewContainer, Centered } from '../../components/styled/Layout';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  openSettings: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Settings' })),
});

export class WelcomeView extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render = () =>
    <ViewContainer>
      <Centered>
        <PepperoniLogo />
        <Title>Hello, world!</Title>
        <Description>
          This is a sample view from the <Bold>Pepperoni app kit</Bold>.
        </Description>
        <IconButton name="settings" onPress={this.props.openSettings} />
      </Centered>
    </ViewContainer>;
}

export default connect(undefined, mapDispatchToProps)(WelcomeView);
