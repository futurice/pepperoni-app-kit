import React, {Component} from 'react';
import * as snapshot from '../utils/snapshot';

import {
  TouchableOpacity,
  ActionSheetIOS,
  StyleSheet
} from 'react-native';

/**
 * Simple developer menu, which allows e.g. to clear the app state.
 * It can be accessed through a tiny button in the bottom right corner of the screen.
 * ONLY FOR DEVELOPMENT MODE!
 */
class DeveloperMenu extends Component {
  static displayName = 'DeveloperMenu';

  showDeveloperMenu() {
    const options = {
      clearState: 0,
      showLogin: 1,
      cancel: 2
    };

    const callback = async index => {
      if (index === options.clearState) {
        await snapshot.clearSnapshot();
        console.warn('(╯°□°）╯︵ ┻━┻ \nState cleared, Cmd+R to reload the application now');
      }
    };

    ActionSheetIOS.showActionSheetWithOptions({
      options: [
        'Clear state',
        'Cancel'
      ],
      cancelButtonIndex: options.cancel
    }, callback);
  }

  render() {
    if (!__DEV__) {
      return null;
    }

    return (
      <TouchableOpacity
        style={styles.circle}
        onPress={this.showDeveloperMenu}
        />
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff'
  }
});

export default DeveloperMenu;
