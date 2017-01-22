import React, {PropTypes, Component} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import * as theme from '../utils/theme';

class TabBarButton extends Component {
  static displayName = 'TabBarButton';

  static propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.action}
        style={[styles.button, this.props.isSelected && styles.selected]}
        >
        <Text
          style={[styles.text, this.props.isSelected && styles.selectedText]}
        >
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: theme.colors.tabBorder,
    borderLeftWidth: 1,
    borderLeftColor: theme.colors.tabBorder,
    backgroundColor: theme.colors.tab
  },
  selected: {
    backgroundColor: theme.colors.selectedTab
  },
  text: {
    color: theme.colors.tabText,
    fontSize: 16
  },
  selectedText: {
    color: theme.colors.selectedTabText,
    fontWeight: 'bold'
  }
});

export default TabBarButton;
