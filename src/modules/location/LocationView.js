import React, {PropTypes} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Platform,
  MapView
} from 'react-native';

import Button from '../../components/Button';
import * as NavigationState from '../../modules/navigation/NavigationState';
import * as theme from '../../utils/theme';
import {getRandomLocation} from '../../services/locationService';

const LocationView = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired,
    office: PropTypes.string.isRequired,
    place: PropTypes.object.isRequired
  },

  onNextPress() {
    let place;
    while (!place || place.name === this.props.place.name) {
      place = getRandomLocation();
    }

    this.props.dispatch(NavigationState.replaceRoute({
      key: 'Location',
      title: place.name,
      place
    }));
  },

  render() {
    const place = this.props.place;
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
      <ScrollView style={[styles.container]}>
        <Image
          resizeMode='cover'
          source={{
            uri: place.picture,
            height: 200,
            width: Dimensions.get('window').width
          }}
        />
        <Text style={styles.placeInfo}>
          {place.description}
        </Text>
        {Platform.OS === 'ios' && (
          // MapView is not built-in on Android. Use the react-native-maps
          // library: https://github.com/airbnb/react-native-maps
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              region={region}
              annotations={marker}
            />
            <Image
              style={styles.gradient}
              source={require('../../../assets/gradient.png')}
            />
            <Text style={styles.placeAddress}>
              {place.address}
            </Text>
          </View>
        ) }
        {Platform.OS === 'android' && (
          <Text style={styles.placeInfoPlain}>
            {place.address}
          </Text>
        )}
        <View style={styles.actionButtonContainer}>
          <Button
            style={styles.actionButton}
            text='Something else'
            action={this.onNextPress}
          />
        </View>
      </ScrollView>
    );
  }
});

const spacing = {
  marginHorizontal: 20
};

const mapHeight = 120;
const mapMargin = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  placeTitle: {
    ...theme.fonts.h2,
    ...spacing,
    marginBottom: 10
  },
  placeInfo: {
    ...spacing,
    fontSize: 20,
    marginTop: 20
  },
  placeInfoPlain: {
    ...spacing,
    fontSize: 16,
    marginTop: 20
  },
  mapContainer: {
    height: mapHeight + (2 * mapMargin)
  },
  map: {
    ...spacing,
    flex: 1,
    height: mapHeight,
    margin: mapMargin
  },
  gradient: {
    position: 'relative',
    opacity: 0.5,
    // silly hackery
    margin: mapMargin,
    height: mapHeight,
    width: Dimensions.get('window').width - (2 * mapMargin),
    top: -(mapHeight + (2 * mapMargin))
  },
  placeAddress: {
    position: 'relative',
    // more silly hackery
    top: -(2 * mapHeight + 4 * mapMargin),
    margin: mapMargin * 1.5,
    backgroundColor: 'transparent',
    fontWeight: '400',
    color: 'white',
    fontSize: 18
  },
  actionButtonContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  city: {
    paddingBottom: 40
  }
});

export default LocationView;
