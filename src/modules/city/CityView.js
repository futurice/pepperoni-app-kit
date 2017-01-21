import * as CityState from './CityState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import * as theme from '../../utils/theme';
import Button from '../../components/Button';
import PageIndicator from '../../components/PageIndicator';
import {getRandomLocation} from '../../services/locationService';

import React, {PropTypes} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ListView,
  Dimensions
} from 'react-native';

const window = Dimensions.get('window');

const cities = [
  {name: 'London', image: require('../../../assets/city-images/london.png')},
  {name: 'Berlin', image: require('../../../assets/city-images/berlin.png')},
  {name: 'Helsinki', image: require('../../../assets/city-images/helsinki.png')},
  {name: 'Tampere', image: require('../../../assets/city-images/tampere.png')},
  {name: 'Stockholm', image: require('../../../assets/city-images/stockholm.png')},
  {name: 'Munich', image: require('../../../assets/city-images/munich.png')}
];

const CityView = React.createClass({
  propTypes: {
    office: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  },
  getInitialState() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(cities)
    };
  },

  selectOffice(office) {
    this.props.dispatch(CityState.selectOffice(office));

    const place = getRandomLocation();
    this.props.dispatch(NavigationState.pushRoute({
      key: 'Location',
      title: place.name,
      place
    }));
  },

  renderRow({name, image}, section, index) {
    return (
      <View style={styles.cityCard}>
        <Image source={image} />
        <Text style={[theme.fonts.h1, styles.title]}>
          {name}
        </Text>
        <PageIndicator
          pageCount={cities.length}
          selectedIndex={+index}
          style={styles.pageIndicator}
        />
        <Button
          text="What's for lunch?"
          action={() => this.selectOffice(name)}
          style={styles.actionButton}
        />
      </View>
    );
  },

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          style={styles.swiper}
          vertical={false}
          alwaysBounceVertical={false}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={true}
          loop={true}
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  row: {
    flex: 1
  },
  swiper: {
    flex: 1
  },
  cityCard: {
    flex: 1,
    overflow: 'hidden',
    width: window.width,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  title: {
    margin: 10
  },
  pageIndicator: {
    margin: 10
  },
  actionButton: {
    marginTop: 20
  }

});

export default CityView;
