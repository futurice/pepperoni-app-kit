import React from 'react-native';
import TabBarButton from '../components/TabBarButton';

const {
  PropTypes,
  StyleSheet,
  View
} = React;

const TabBar = React.createClass({
  displayName: 'TabBar',
  propTypes: {
    tabs: PropTypes.array.isRequired,
    height: PropTypes.number.isRequired,
    currentTabIndex: PropTypes.number.isRequired,
    switchTab: PropTypes.func.isRequired
  },

  render() {
    const buttons = this.props.tabs.map((tab, index) => (
      <TabBarButton
        key={'tab-bar-button-' + tab.title}
        text={tab.title}
        action={() => this.props.switchTab(index)}
        isSelected={index === this.props.currentTabIndex}
      />
    ));

    return (
      <View style={[styles.navigationBar, {height: this.props.height}]}>
        {buttons}
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
