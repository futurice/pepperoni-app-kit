import * as env from '../../env';
import Auth0Lock from 'react-native-lock';
import * as AuthStateActions from '../modules/auth/AuthState';
import store from '../redux/store';
const {Platform} = require('react-native');

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

  if (Platform.OS === 'ios') {
    lock.customizeTheme({
      A0ThemePrimaryButtonNormalColor: '#009DEB',
      // A0ThemePrimaryButtonFont: font,
      A0ThemeSecondaryButtonTextColor: '#000',
      // A0ThemeSecondaryButtonFont: font,
      A0ThemeTextFieldTextColor: '#000',
      A0ThemeTextFieldPlaceholderTextColor: '#000',
      A0ThemeTextFieldIconColor: '#000',
      // A0ThemeTextFieldFont: font,
      A0ThemeTitleTextColor: '#000',
      // A0ThemeTitleFont: font,
      A0ThemeDescriptionTextColor: '#000',
      // A0ThemeDescriptionFont: font,
      A0ThemeSeparatorTextColor: '#000',
      // A0ThemeSeparatorTextFont: font,
      //    TODO add backaground
      A0ThemeScreenBackgroundImageName: 'backgroundImage',
      // how to add images to xcode/ios project? ? 1) via Xcode Add Files to project!
      // TODO scale image?
      // TODO add android theme
      // TODO commit pods dir?
      A0ThemeIconImageName: 'logo',
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
