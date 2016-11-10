/*eslint-disable max-nested-callbacks, no-unused-expressions*/

import {Effects} from 'redux-loop';
import {initialState, dispatch} from '../../../../test/state';
import * as CounterStateActions from '../CounterState';

describe('CounterState', () => {

  // Example of how to test multiple dispatches in series
  describe('increment', () => {
    const getValue = state => state.getIn(['counter', 'value']);

    it('should increment the value property by one', () => {
      const [secondState] = dispatch(initialState, CounterStateActions.increment());
      expect(getValue(secondState)).toBe(getValue(initialState) + 1);

      const [thirdState] = dispatch(secondState, CounterStateActions.increment());
      expect(getValue(thirdState)).toBe(getValue(secondState) + 1);
    });
  });

  describe('reset', () => {
    it('should reset the counter state to initial value', () => {
      // create an incremented state to test against
      const [modifiedState] = dispatch(initialState, CounterStateActions.increment());
      expect(modifiedState.get('counter')).not.toBe(initialState.get('counter'));

      // reset to original and verify it === initial state
      const [resetState] = dispatch(modifiedState, CounterStateActions.reset());
      expect(resetState.get('counter')).toBe(initialState.get('counter'));
    });
  });

  // Example of how to test side effects returned from reducers
  describe('random', () => {

    const [nextState, effects] = dispatch(initialState, CounterStateActions.random());

    it('should update loading bit', () => {
      expect(nextState.getIn(['counter', 'loading'])).toBe(true);
    });

    it('should trigger a requestRandomNumber side effect', () => {
      expect(effects).toEqual(
        Effects.promise(CounterStateActions.requestRandomNumber)
      );
    });
  });

  // Example of how to test async action creators
  describe('requestRandomNumber', () => {
    // randomizer uses timeouts to delay response, let's make it execute
    // instantly to improve test speed
    beforeEach(() => {
      // jest 16 still breaks Promises...
      global.Promise = require.requireActual('promise');
      // instantly resolve timeouts
      global.setTimeout = (cb) => cb();
    });

    it('should generate a random number and dispatch it', async () => {
      const action = await CounterStateActions.requestRandomNumber();
      expect(typeof action.payload).toBe('number');

      const [nextState] = dispatch(initialState, action);
      expect(nextState.getIn(['counter', 'value'])).toBe(action.payload);
      expect(nextState.getIn(['counter', 'loading'])).toBe(false);
    });
  });
});
