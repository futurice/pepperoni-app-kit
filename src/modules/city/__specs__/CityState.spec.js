/*eslint-disable max-nested-callbacks, no-unused-expressions*/

import {initialState, dispatch} from '../../../../test/state';
import * as CityStateActions from '../CityState';

describe('CityState', () => {

  describe('selectOffice', () => {
    const getValue = state => state.getIn(['city', 'value']);
    // Futirice offices
    const offices = require('../../../data/sampleLocations.json');

    it('should change the value to the city name', () => {
      const [secondState] = dispatch(initialState, CityStateActions.selectOffice(offices[2]));
      expect(getValue(secondState).city).toBe('London');
    });
  });

  describe('pager position', () => {
    const getValue = state => state.getIn(['city', 'position']);

    it('should change the position in the pager', () => {
      const [secondState] = dispatch(initialState, CityStateActions.changePosition(2));
      expect(getValue(secondState)).toBe(2);
    });
  });
});
