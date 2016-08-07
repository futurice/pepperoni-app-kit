import React, {PropTypes} from 'react';
import TabBarButton from '../components/TabBarButton';

import {
  NavigationExperimental,
  StyleSheet,
  View
} from 'react-native';

const {PropTypes: NavigationPropTypes} = NavigationExperimental;

const TabBar = React.createClass({
  displayName: 'TabBar',
  propTypes: {
    tabs: NavigationPropTypes.navigationState.isRequired,
    height: PropTypes.number.isRequired,
    currentTabIndex: PropTypes.number.isRequired,
    switchTab: PropTypes.func.isRequired
  },

  render() {
    return (
      <View style={[styles.navigationBar, {height: this.props.height}]}>
        {this.props.tabs.routes.map((route, index) => (
          <TabBarButton
            key={'tab-bar-button-' + route.key}
            text={route.title}
            action={() => this.props.switchTab(index)}
            isSelected={index === this.props.currentTabIndex}
          />
        ))}
      </View>
    );
  }
});

const styles = StyleSheet.create({
  navigationBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonWrapper: {
    flex: 1,
    position: 'relative'
  }
});

export default TabBar;
