import React, {PropTypes, Component} from 'react';
import {addNavigationHelpers} from 'react-navigation';

import AppNavigator from '../AppNavigator';

class NavigationView extends Component {
  render() {
    return (
      <AppNavigator
        navigation={
          addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.navigationState
          })
        }
      />
    );
  }
}

NavigationView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigationState: PropTypes.shape({
    index: PropTypes.number.isRequired,
    routes: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      routeName: PropTypes.string.isRequired
    }))
  }).isRequired
};

export default NavigationView;
