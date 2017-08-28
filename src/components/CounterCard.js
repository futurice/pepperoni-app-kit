import React from 'react';
import { Title } from './styled/Text';
import { FlexRow } from './styled/Layout';
import { IconButton, CounterWrapper } from './styled/Branding';

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
