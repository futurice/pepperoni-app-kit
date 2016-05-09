/*eslint-disable max-nested-callbacks*/

import sinon from 'sinon';
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {shallow} from 'enzyme';
import {describe, it} from 'mocha';
import {expect} from 'chai';
import {hasStyles} from '../../../test/assertions';

import TabBarButton from '../TabBarButton';

describe('<TabBarButton/>', () => {

  it('should render the text property as label', () => {
    const wrapper = shallow(
      <TabBarButton text='TestButton' isSelected={true} action={() => null} />
    );

    expect(wrapper.contains(<Text>TestButton</Text>)).to.equal(true);
  });

  it('should respond to press events', () => {
    const onPress = sinon.spy();
    const wrapper = shallow(
      <TabBarButton text='TestButton' action={onPress} isSelected={false} />
    );

    expect(onPress.called).to.equal(false);

    wrapper.find(TouchableOpacity).simulate('press');
    expect(onPress.calledOnce).to.equal(true);
  });

  it('should render selected button with a background color', () => {
    const unselected = shallow(
      <TabBarButton text='TestButton' action={() => null} isSelected={false} />
    );

    const selected = shallow(
      <TabBarButton text='TestButton' action={() => null} isSelected={true} />
    );

    expect(hasStyles(unselected.first(), {backgroundColor: 'yellow'})).to.equal(false);
    expect(hasStyles(selected.first(), {backgroundColor: 'yellow'})).to.equal(true);
  });
});
