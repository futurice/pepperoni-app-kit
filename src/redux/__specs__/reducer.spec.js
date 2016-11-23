/*eslint-disable max-nested-callbacks, no-unused-expressions*/

import {initialState, dispatch} from '../../../test/state';
import * as SessionState from '../../modules/session/SessionState';

describe('reducer', () => {
  describe('mainReducer', () => {
    it('resets state with RESET_STATE action', () => {
      // Use auth.isLoggedIn as an example. isReady is changed in the
      // SessionState reducer, so the entire store state is not reset.
      const newState = initialState.setIn(['city', 'position'], 4);
      const resetStateAction = SessionState.resetSessionStateFromSnapshot(newState);

      const [nextState] = dispatch(initialState, resetStateAction);

      expect(initialState.getIn(['city', 'position'])).toBe(0);
      expect(nextState.getIn(['city', 'position'])).toBe(4);
    });
  });
});
