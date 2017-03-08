import React, {PropTypes, Component} from 'react';
import {addNavigationHelpers} from 'react-navigation';

import AppNavigator from './Navigator';

class NavigatorView extends Component {
  render() {
    return (
      <AppNavigator
        navigation={
          addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.navigatorState
          })
        }
      />
    );
  }
}

NavigatorView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigatorState: PropTypes.shape({
    index: PropTypes.number.isRequired,
    routes: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      routeName: PropTypes.string.isRequired
    }))
  }).isRequired
};

export default NavigatorView;
