import * as ENV from '../../env';
const Auth0Lock = require('react-native-lock');

export function showLogin() {
  const lock = new Auth0Lock({
    clientId: ENV.AUTH0_CLIENT_ID,
    domain: ENV.AUTH0_NAMESPACE
  });

  lock.show({
      closable: true
    }, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      // Authentication worked!
      console.log('Logged in with Auth0!');
      this.setState({
        profile: profile,
        token: token,
        isLoggedIn: true
      })
    }
  );
};
