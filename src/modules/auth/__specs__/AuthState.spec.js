/*eslint-disable max-nested-callbacks, no-unused-expressions*/

import {initialState, dispatch} from '../../../../test/state';
import * as AuthStateActions from '../AuthState';

describe('AuthState', () => {
  describe('onUserLoginSuccess', () => {
    it('should update the currentUser bit', () => {

      const profile = {username: 'test'};
      const token = {token: 'DUMMY_TOKEN'};
      const [nextState] = dispatch(initialState, AuthStateActions.onUserLoginSuccess(profile, token));

      // verify initial state for sanity
      expect(initialState.getIn(['auth', 'isLoggedIn'])).toBe(false);

      // verify updated state
      expect(nextState.getIn(['auth', 'isLoggedIn'])).toBe(true);
      expect(nextState.getIn(['auth', 'currentUser']).toJS()).toEqual(profile);
      expect(nextState.getIn(['auth', 'authenticationToken']).toJS()).toEqual(token);
    });
  });
});
