import React, {PropTypes, Component} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class TabBarButton extends Component{
  constructor(props){
    super(props);
    this.displayName = 'TabBarButton';
  }
  
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.action}
        style={[styles.button, this.props.isSelected && styles.selected]}
        >
        <Icon name='caret-down' size={20} color='#900' /><Text>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

TabBarButton.propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selected: {
    backgroundColor: 'yellow'
  }
});

export default TabBarButton;
