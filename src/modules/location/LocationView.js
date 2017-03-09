import React, {PropTypes, Component} from 'react';
import Button from '../../components/Button';
import * as theme from '../../utils/theme';
import * as Utils from '../../utils/Utils';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Linking,
  Platform
} from 'react-native';

const window = Dimensions.get('window');

class LocationView extends Component {
  static displayName = 'LocationView';

  static propTypes = {
    office: PropTypes.object.isRequired,
    place: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    cityStateActions: PropTypes.shape({
      retryPlace: PropTypes.func.isRequired
    }).isRequired,
    navigationStateActions: PropTypes.shape({
      popRoute: PropTypes.func.isRequired
    })
  }

  componentWillMount() {
    //if this.prop.place doesn't contain the right data go back
    if (!this.props.place.name) {
      this.props.navigationStateActions.popRoute();
    }
  }

  onNextPress = () => {
    this.props.cityStateActions.retryPlace(this.props.office, this.props.place);
  }

  buildPhotosURL = () => {
    var size = this.props.place.photos.groups[0].items.length;
    var photo = this.props.place.photos.groups[0].items[Utils.getRamdonNumberBetweenRange(size, 0)];
    return (photo.prefix + '500x500' + photo.suffix);
  }

  getImage = () => {
    return (this.props.place.photos && this.props.place.photos.count && this.props.place.photos.count > 0)
      ? (<Image style={styles.image} source={{uri: this.buildPhotosURL()}}>{this.getRating()}</Image>)
      : (<View style={styles.noImage}>{this.getRating()}</View>);
  }

  getPrice = () => {
    var price = '';
    if (this.props.place.price) {
      for (let i = 0; i < this.props.place.price.tier; i++) {
        price += this.props.place.price.currency;
      }
    }
    return price;
  }

  getCategories = () => {
    var categories = '';
    if (this.props.place.categories) {
      for (let i = 0; i < this.props.place.categories.length; i++) {
        categories += this.props.place.categories[i].name + ', ';
      }
    }
    return categories.slice(0, -2);
  }

  getAddress = () => {
    var address = '';
    if (this.props.place.location) {
      address = (this.props.place.location.address)
      ? this.props.place.location.address + ' '
      : '';
      address += (this.props.place.location.postalCode)
      ? this.props.place.location.postalCode
      : '';
    }
    return address;
  }

  getRatingStyles = () => {
    return (this.props.place.ratingColor)
    ? ({backgroundColor: '#' + this.props.place.ratingColor})
    : '';
  }

  getRating = () => {
    return (this.props.place.rating)
      ? (<Image style={styles.gradient}
              source={require('../../../assets/gradient.png')}>
              <View style={[styles.ratingView, this.getRatingStyles()]}>
                <Text style={styles.rating}>{this.props.place.rating}</Text>
                <Text style={styles.ratingTotal}>/ 10</Text>
              </View>
            </Image>)
      : (<Image style={styles.gradient}source={require('../../../assets/gradient.png')}/>);
  }

  getHours = () => {
    return (this.props.place.hours)
      ? (this.props.place.hours.status)
      : '';
  }

  getContact = () => {
    return (this.props.place.contact)
      ? (this.props.place.contact.formattedPhone)
      : '';
  }

  getLinkURL = () => {
    var url = (Platform.OS === 'android')
      ? 'https://maps.google.com?q='
      : 'http://maps.apple.com/?q=';
    return url + this.props.place.location.lat + ',' + this.props.place.location.lng;
  }

  render() {
    var spinner = this.props.loading
      ? (<ActivityIndicator style={styles.spinner} size='large' color='white'/>)
      : (<View/>);

    return (
      <View style={styles.container}>
      <ScrollView>
        {this.getImage()}
        <View style={styles.cardInfo}>
          <Text numberOfLines={2} style={styles.title}>
            {this.props.place.name}
          </Text>
          <Text style={[styles.text, {fontWeight: '500'}]}>
            {this.getCategories()}
          </Text>
          <Text style={[styles.text, {fontWeight: '500', marginBottom: 10}]}>
            {this.getPrice()}
          </Text>
          <Text numberOfLines={2} style={styles.text}>
            {this.getAddress()}
          </Text>
          <Text style={styles.text}>
            {this.getHours()}
          </Text>
          <Text style={styles.text}>
            {this.getContact()}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text='Yeah, take me there!'
            buttonStyle={theme.buttons.primary}
            textStyle={theme.fonts.primary}
            action={() => Linking.openURL(this.getLinkURL())
              .catch(err => console.error('An error occurred', err))} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text='Nah, try another one'
            buttonStyle={theme.buttons.secondary}
            textStyle={theme.fonts.secondary}
            action={this.onNextPress} />
        </View>
      </ScrollView>
      {spinner}
      </View>
    );
  }
}

const spacing = {
  marginHorizontal: 20
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  title: {
    ...spacing,
    ...theme.fonts.h2,
    margin: 8
  },
  text: {
    ...spacing,
    ...theme.fonts.body,
    marginBottom: 5
  },
  buttonContainer: {
    margin: 10
  },
  spinner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: window.height,
    backgroundColor: theme.colors.spinner
  },
  image: {
    height: 200,
    width: window.width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noImage: {
    height: 40,
    width: window.width,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  cardInfo: {
    backgroundColor: theme.colors.selectedTab
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: window.width,
    height: 50
  },
  ratingView: {
    flexDirection: 'row',
    backgroundColor: 'transparent', // default backgroundColor
    width: 72,
    height: 30,
    bottom: 0,
    left: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rating: {
    margin: 5,
    fontSize: 18,
    color: theme.colors.text,
    fontFamily: 'System',
    fontWeight: '500',
    backgroundColor: 'transparent'
  },
  ratingTotal: {
    fontSize: 10,
    marginHorizontal: 2,
    color: theme.colors.text,
    fontFamily: 'System',
    marginBottom: 5
  }
});

export default LocationView;
