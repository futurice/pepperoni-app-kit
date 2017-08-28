import React from 'react';
import { Title } from './Text';
import { FlexRow } from './Layout';
import { IconButton, CounterWrapper } from './Pepperoni';

export default class CounterCard extends React.Component {
  render = () =>
    <CounterWrapper>
      <Title>
        Counter: {this.props.value}
      </Title>
      <FlexRow>
        <IconButton onPress={this.props.reset} name="refresh" />
        <IconButton onPress={this.props.increment} name="plus-one" />
      </FlexRow>
    </CounterWrapper>;
}
