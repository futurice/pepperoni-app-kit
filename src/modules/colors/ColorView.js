import React, { PropTypes, Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const color = () => Math.floor(255 * Math.random());

/**
 * Sample view to demonstrate navigation patterns.
 * @TODO remove this module in a live application.
 */
class ColorView extends Component {
  constructor(props){
    super(props)
    this.state = {
      background: `rgba(${color()},${color()},${color()}, 1)`
    };
    this.onNextPress = this.onNextPress.bind(this);
  }

  onNextPress() {
    const index = this.props.index;
    this.props.navigationStateActions.pushRoute({
      key: `Color_${index + 1}`,
      title: `Color Screen #${index + 1}`
    });
  }

  render() {
    const index = this.props.index;
    const text = `View #${index}`;
    return (
      <View style={[styles.container, { backgroundColor: this.state.background }]}>
        <Text onPress={this.onNextPress}>
          {text}
        </Text>
      </View>
    );
  }
}

ColorView.propTypes = {
  index: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ColorView;
