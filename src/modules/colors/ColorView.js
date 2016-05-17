import React, {PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import * as NavigationState from '../../modules/navigation/NavigationState';

const color = () => Math.floor(255 * Math.random());

const restaurants = ['William IV', 'The Eagle', 'Coffee Junction', 'The other pub'];

const randomPicker = () => Math.floor(Math.random() * restaurants.length);

/**
 * Sample view to demonstrate navigation patterns.
 * @TODO remove this module in a live application.
 */
const ColorView = React.createClass({
  propTypes: {
    index: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      background: `rgba(${color()},${color()},${color()}, 1)`
    };
  },

  onNextPress() {
    const index = this.props.index;
    this.props.dispatch(NavigationState.pushRoute({
      key: `Color_${index + 1}`,
      title: `Color Screen #${index + 1}`
    }));
  },

  render() {

    const restaurant = `${restaurants[randomPicker()]}`;

    return (
      <View style={[styles.container, {backgroundColor: this.state.background}]}>
        <Text onPress={this.onNextPress} style={styles.restaurant}>
          {restaurant}
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  restaurant: {
    fontSize: 30
  }
});

export default ColorView;
