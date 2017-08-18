import React from 'react';
import { connect } from 'react-redux';

import { increment, reset } from '../../state/counter';
import {
  Centered,
  WelcomeText,
  Bold,
  Button,
  FlexRow,
} from '../../components/styled';

const mapStateToProps = state => ({
  value: state.counter.value,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment()),
  onReset: () => dispatch(reset()),
});

export class CounterView extends React.Component {
  static navigationOptions = {
    title: 'Counter',
  };

  render = () =>
    <Centered>
      <WelcomeText>
        <Bold>Counter</Bold>
      </WelcomeText>

      <WelcomeText>
        <Bold>
          {this.props.value}
        </Bold>
      </WelcomeText>

      <FlexRow>
        <Button onPress={this.props.onIncrement}>
          <WelcomeText>Increment</WelcomeText>
        </Button>
        <Button onPress={this.props.onReset}>
          <WelcomeText>Reset</WelcomeText>
        </Button>
      </FlexRow>

      <WelcomeText>
        This is an example of <Bold>Redux</Bold> usage with the{' '}
        <Bold>Pepperoni app kit</Bold>.
      </WelcomeText>
    </Centered>;
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterView);
