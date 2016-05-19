import React, {PropTypes, Component} from 'react';
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
class PlacesView extends Component {
  static displayName = 'ColorView';

  static propTypes = {
    index: PropTypes.number.isRequired,
    navigationStateActions: PropTypes.shape({
      pushRoute: PropTypes.func.isRequired
    })
  };

  constructor(props) {
    super(props);
    this.state = {
      background: `rgba(${color()},${color()},${color()}, 1)`
    };
  }

  onNextPress = () => {
    const index = this.props.index;
    this.props.navigationStateActions.pushRoute({
      key: `Color_${index + 1}`,
      title: `Color Screen #${index + 1}`
    });
  };

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
}

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

export default PlacesView;
