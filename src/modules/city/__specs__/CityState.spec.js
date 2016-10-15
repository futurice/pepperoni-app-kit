/*eslint-disable max-nested-callbacks, no-unused-expressions*/

import {describe, it} from 'mocha';
import {expect} from 'chai';
import {initialState, dispatch} from '../../../../test/state';
import * as CityStateActions from '../CityState';

describe('CityState', () => {

  describe('selectOffice', () => {
    const getValue = state => state.getIn(['city', 'value']);

    it('should change the value to the city name', () => {
      const [secondState] = dispatch(initialState, CityStateActions.selectOffice('London'));
      expect(getValue(secondState)).to.equal('London');
    });
  });
});
