import React, {PropTypes, Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  MapView
} from 'react-native';

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
    office: PropTypes.string.isRequired,
    navigationStateActions: PropTypes.shape({
      pushRoute: PropTypes.func.isRequired
    })
  };

  constructor(props) {
    super(props);
    this.state = {
      background: 'white'
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
    const marker = [
      {
        latitude: place.latitude,
        longitude: place.longitude,
        title: place.name,
        subtitle: place.type
      }
    ];
    const region = {
      latitude: place.latitude,
      longitude: place.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005
    };

    return (
      <View style={[styles.container, {backgroundColor: this.state.background}]}>
        <Text style={styles.location}>
          {this.props.office}
        </Text>
        <Text onPress={this.onNextPress} style={styles.placeTitle}>
          {place.name}
        </Text>
        <Text style={styles.placeInfo}>
          Type: {place.type}
        </Text>
        <Text style={styles.placeInfo}>
          Distance: {place.distance}
        </Text>
        <MapView
          style={styles.map}
          region={region}
          annotations={marker}
        />
        <Text style={styles.placeAddress}>
          {place.address}
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
  },
  placeAddress: {
    fontSize: 15,
    width: 300,
    textAlign: 'center'
  },
  map: {
    height: 150,
    width: 250,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000'
  },
  location: {
    paddingBottom: 40
  }
});

export default PlacesView;
