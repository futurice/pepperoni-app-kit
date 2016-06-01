import * as env from '../../env';
import Auth0Lock from 'react-native-lock';
import * as AuthStateActions from '../modules/auth/AuthState';
import store from '../redux/store';
const {Platform} = require('react-native');

const clientId = env.AUTH0_CLIENT_ID;
const domain = env.AUTH0_DOMAIN;
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

  if (Platform.OS === 'ios') {
    lock.customizeTheme({
      A0ThemePrimaryButtonNormalColor: '#39babd',
      A0ThemePrimaryButtonHighlightedColor: '#08AFB3',
      A0ThemeSecondaryButtonTextColor: '#ffffff',
      A0ThemeTextFieldTextColor: '#ffffff',
      A0ThemeTextFieldPlaceholderTextColor: '#ffffff',
      A0ThemeTextFieldIconColor: '#ffffff',
      A0ThemeTitleTextColor: '#ffffff',
      A0ThemeDescriptionTextColor: '#ffffff',
      A0ThemeSeparatorTextColor: '#ffffff',
      A0ThemeScreenBackgroundColor: '#39babd',
      A0ThemeIconImageName: 'pepperoni',
      A0ThemeCredentialBoxBorderColor: '' //transparent
    });
  }

  lock.show(options, (err, profile, token) => {
    if (err) {
      store.dispatch(AuthStateActions.onUserLoginError(err));
      return;
    }

    // Authentication worked!
    store.dispatch(AuthStateActions.onUserLoginSuccess(profile, token));
  });
}
