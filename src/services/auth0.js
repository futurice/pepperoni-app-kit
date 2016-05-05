import * as env from '../../env';
import Auth0Lock from 'react-native-lock';
import * as AuthStateActions from '../modules/auth/AuthState';
import store from '../redux/store';

const clientId = env.AUTH0_CLIENT_ID;
const domain = env.AUTH0_NAMESPACE;
const authenticationEnabled = clientId && domain;

let lock = null;
if (authenticationEnabled) {
  lock = new Auth0Lock({
    clientId,
    domain
  });
} else {
  console.warn('Authentication not enabled: Auth0 configuration not provided');
}

export function showLogin() {
  if (!authenticationEnabled) {
    return;
  }

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
