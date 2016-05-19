/*eslint-disable max-nested-callbacks, no-unused-expressions*/

import {Effects} from 'redux-loop';
import {initialState, dispatch} from '../../../../test/state';
import * as LocationStateActions from '../LocationState';

describe('LocationState', () => {

  describe('selectOffice', () => {
    const getValue = state => state.getIn(['location', 'value']);

    it('should change the value to the location name', () => {
      const [secondState] = dispatch(initialState, LocationStateActions.selectOffice('London'));
      expect(getValue(secondState)).toBe('London');
    });
  });
});
