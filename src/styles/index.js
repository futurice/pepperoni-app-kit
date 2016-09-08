import {Platform} from 'react-native';
import colors from './colors';

// Height duplicated from React Native NavigationHeader component
const APP_BAR_HEIGHT = Platform.OS === 'ios' ? 64 : 56;
// Customize bottom tab bar height here if desired
const TAB_BAR_HEIGHT = 50;
const TEXT_ALIGN = Platform.OS === 'ios' ? 'center' : 'left';
const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
};

const styles = {
  nav_container: {
    flex: 1
  },
  sceneContainer: {
    flex: 1,
    marginTop: APP_BAR_HEIGHT,
    marginBottom: TAB_BAR_HEIGHT
  },
  nav_header: {
    backgroundColor: colors.primaryColor,
    borderBottomWidth: 1,
    borderColor: colors.primaryColor,
    shadowColor: colors.black,
    shadowOpacity: .5,
    shadowOffset: {height: 3}
  },
  nav_text: {
    color: colors.white,
    flex: 1,
    fontSize: 25,
    marginTop: 2,
    fontWeight: '500',
    textAlign: TEXT_ALIGN
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfilePhoto: {
    ...circle,
    alignSelf: 'center'
  },
  counterButton: {
    ...circle,
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  counter: {
    color: colors.white,
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    textAlign: 'center',
    color: colors.black,
    marginBottom: 5,
    padding: 5
  },
  button: {
    backgroundColor: colors.accent,
    padding: 20,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOpacity: .5,
    shadowOffset: {height: 5}
  },
  linkButton: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.white
  },
  coinText: {
    fontSize: 20
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white
  },
  loadText: {
    fontSize: 20
  },
  loadCircle: {
    width: 100,
    height: 100
  }
};

export default styles;
