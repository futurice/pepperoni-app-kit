/*eslint-disable max-nested-callbacks*/

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {shallow} from 'enzyme';
import {hasStyles} from '../../../test/assertions';

import TabBarButton from '../TabBarButton';

describe('<TabBarButton/>', () => {

  it('should render the text property as label', () => {
    const wrapper = shallow(
      <TabBarButton text='TestButton' isSelected={true} action={() => null} />
    );

    expect(wrapper.contains(<Text>TestButton</Text>)).toBe(true);
  });

  it('should respond to press events', () => {
    const onPress = jest.fn();
    const wrapper = shallow(
      <TabBarButton text='TestButton' action={onPress} isSelected={false} />
    );

    expect(onPress.mock.calls.length).toBe(0);

    wrapper.find(TouchableOpacity).simulate('press');
    expect(onPress).toBeCalled();
  });

  it('should render selected button with a background color', () => {
    const unselected = shallow(
      <TabBarButton text='TestButton' action={() => null} isSelected={false} />
    );

    const selected = shallow(
      <TabBarButton text='TestButton' action={() => null} isSelected={true} />
    );

    expect(hasStyles(unselected.first(), {backgroundColor: 'yellow'})).toBe(false);
    expect(hasStyles(selected.first(), {backgroundColor: 'yellow'})).toBe(true);
  });
});
