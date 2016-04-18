import * as ENV from '../../env';
const Auth0Lock = require('react-native-lock');
const lock = new Auth0Lock({
  clientId: ENV.AUTH0_CLIENT_ID,
  domain: ENV.AUTH0_NAMESPACE
});

export function showLogin() {
  lock.show({
    closable: true
  }, (err, profile, token) => {
    if (err) {
      console.log(err);
      return;
    }
    // Authentication worked!
    console.log('Logged in with Auth0!');
  });
}
