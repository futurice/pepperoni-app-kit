/*eslint-disable max-nested-callbacks*/

import React from 'react';
import {TouchableOpacity} from 'react-native';
import {shallow} from 'enzyme';

import TabBarButton from '../TabBarButton';

describe('<TabBarButton/>', () => {

  it('should render the text property as label', () => {
    const wrapper = shallow(
      <TabBarButton text='TestButton' isSelected={false} action={() => null} />
    );

    expect(wrapper.contains('TestButton')).toBe(true);
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
});
