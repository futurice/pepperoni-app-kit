import * as ENV from '../../env';
import Auth0Lock from 'react-native-lock';
import * as AppStateActions from '../modules/AppState';
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
      store.dispatch(AppStateActions.onUserLoginError(err));
      return;
    }

    // Authentication worked!
    store.dispatch(AppStateActions.onUserLoginSuccess(profile, token));
  });
}
