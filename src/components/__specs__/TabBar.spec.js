/*eslint-disable max-nested-callbacks*/

import React from 'react';
import {shallow} from 'enzyme';
import {describe, it} from 'mocha';
import {expect} from 'chai';
import {hasStyles} from '../../../test/assertions';

import TabBar from '../TabBar';
import TabBarButton from '../TabBarButton';

const tabs = {
  index: 0,
  routes: [
    {title: 'Tab 1'},
    {title: 'Tab 2'},
    {title: 'Tab 3'}
  ]
};

describe('<TabBar />', () => {

  it('should render a <TabBarButton> for each passed tab', () => {
    const wrapper = shallow(
      <TabBar tabs={tabs} height={0} currentTabIndex={1} switchTab={() => null} />
    );

    // check that count, order and labels match
    expect(wrapper.find(TabBarButton)).to.have.lengthOf(tabs.routes.length);
    expect(wrapper.find(TabBarButton).map(e => e.props().text))
      .to.deep.equal(['Tab 1', 'Tab 2', 'Tab 3']);
  });

  it('should mark current tab as selected', () => {
    const wrapper = shallow(
      <TabBar tabs={tabs} height={0} currentTabIndex={1} switchTab={() => null} />
    );

    expect(wrapper.find(TabBarButton).map(e => e.props().isSelected))
      .to.deep.equal([false, true, false]);
  });

  it('should apply custom height to the root element', () => {
    const wrapper = shallow(
      <TabBar tabs={tabs} height={123} currentTabIndex={1} switchTab={() => null} />
    );

    expect(hasStyles(wrapper.first(), {height: 123})).to.equal(true);
  });
});
