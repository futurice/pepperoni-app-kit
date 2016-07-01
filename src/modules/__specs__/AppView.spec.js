/*eslint-disable max-nested-callbacks*/

import React from 'react';
import {shallow} from 'enzyme';
import {describe, it} from 'mocha';
import {expect} from 'chai';
import Spinner from 'react-native-gifted-spinner';

import AppView from '../AppView';

describe('<AppView />', () => {
  describe('isReady', () => {
    it('should render a <Spinner /> if not ready', () => {
      const fn = () => {};
      const wrapper = shallow(
        <AppView
          isReady={false}
          isLoggedIn={false}
          dispatch={fn}
        />
      );

      expect(wrapper.find(Spinner)).to.have.lengthOf(1);
    });

    it('should not render a <Spinner /> if ready', () => {
      const fn = () => {};
      const wrapper = shallow(
        <AppView
          isReady={true}
          isLoggedIn={false}
          dispatch={fn}
        />
      );

      expect(wrapper.find(Spinner)).to.have.lengthOf(0);
    });
  });
});
