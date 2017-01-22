/*eslint-disable max-nested-callbacks*/

import React from 'react';
import {TouchableOpacity} from 'react-native';
import {shallow} from 'enzyme';
import {hasStyles} from '../../../test/assertions';
import * as theme from '../../utils/theme';

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

  it('should render selected button with a background color', () => {
    const unselected = shallow(
      <TabBarButton text='TestButton' action={() => null} isSelected={false} />
    );

    const selected = shallow(
      <TabBarButton text='TestButton' action={() => null} isSelected={true} />
    );

    expect(hasStyles(unselected.first(), {backgroundColor: theme.colors.selectedTab})).toBe(false);
    expect(hasStyles(selected.first(), {backgroundColor: theme.colors.selectedTab})).toBe(true);
  });
});
