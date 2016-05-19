import React, {PropTypes, Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const color = () => Math.floor(255 * Math.random());

const placesData = require('../../data/samplePlaces.json');
const places = placesData.London;

const randomPicker = () => Math.floor(Math.random() * places.length);
/**
 * Sample view to demonstrate navigation patterns.
 * @TODO remove this module in a live application.
 */
class PlacesView extends Component {
  static displayName = 'PlacesView';

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

    const place = places[randomPicker()];

    return (
      <View style={[styles.container, {backgroundColor: this.state.background}]}>
        <Text onPress={this.onNextPress} style={styles.placeTitle}>
          {place.name}
        </Text>
        <Text style={styles.placeInfo}>
          Type: {place.type}
        </Text>
        <Text style={styles.placeInfo}>
          Distance: {place.distance}
        </Text>
        <Text style={styles.placeInfo}>
          Address: {place.address}
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
  placeTitle: {
    fontSize: 30
  },
  placeInfo: {
    fontSize: 20
  }
});

export default PlacesView;
