/*eslint-disable max-nested-callbacks, no-unused-expressions*/

import {describe, it} from 'mocha';
import {expect} from 'chai';
import {initialState, dispatch} from '../../../../test/state';
import * as AuthStateActions from '../AuthState';

describe('AuthState', () => {
  describe('onUserLoginSuccess', () => {
    it('should update the currentUser bit', () => {

      const profile = {username: 'test'};
      const token = {token: 'DUMMY_TOKEN'};
      const [nextState] = dispatch(initialState, AuthStateActions.onUserLoginSuccess(profile, token));

      // verify initial state for sanity
      expect(initialState.getIn(['auth', 'isLoggedIn'])).to.equal(false);

      // verify updated state
      expect(nextState.getIn(['auth', 'isLoggedIn'])).to.equal(true);
      expect(nextState.getIn(['auth', 'currentUser']).toJS()).to.eql(profile);
      expect(nextState.getIn(['auth', 'authenticationToken']).toJS()).to.eql(token);
    });
  });
});
