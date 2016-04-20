import * as ENV from '../../env';
import Auth0Lock from 'react-native-lock';
import * as AuthStateActions from '../modules/auth/AuthState';
import store from '../redux/store';

const lock = new Auth0Lock({
  clientId: ENV.AUTH0_CLIENT_ID,
  domain: ENV.AUTH0_NAMESPACE
});

export function showLogin() {
  const options = {
    closable: true
  };

  lock.show(options, (err, profile, token) => {
    if (err) {
      store.dispatch(AuthStateActions.onUserLoginError(err));
      return;
    }

    // Authentication worked!
    store.dispatch(AuthStateActions.onUserLoginSuccess(profile, token));
  });
}
