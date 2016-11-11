import React, {PropTypes, Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  ListView,
  Dimensions
} from 'react-native';

const window = Dimensions.get('window');

class CityView extends Component {
  static displayName = 'CityView';

  static propTypes = {
    office: PropTypes.number.isRequired,
    userName: PropTypes.string,
    userProfilePhoto: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    cityStateActions: PropTypes.shape({
      increment: PropTypes.func.isRequired,
      reset: PropTypes.func.isRequired,
      random: PropTypes.func.isRequired,
	  selectOffice: PropTypes.func.isRequired
    }).isRequired,
    navigationStateActions: PropTypes.shape({
      pushRoute: PropTypes.func.isRequired
    }).isRequired
  };

  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['London', 'Berlin', 'Helsinki', 'Tampere', 'Stockholm', 'Munich'])
    };
  }
  
  increment = () => {
    this.props.locationStateActions.increment();
  };

  reset = () => {
    this.props.locationStateActions.reset();
  };

  random = () => {
    this.props.counterStateActions.random();
  };

  selectOffice = () => {
    this.props.cityStateActions.selectOffice(office);
    this.props.navigationStateActions.pushRoute({
      key: 'Location',
      title: 'Location in ' + office
    });
  };

  renderUserInfo = () => {
    if (!this.props.userName) {
      return null;
    }

    return (
      <View style={styles.userContainer}>
        <Image
          style={styles.userProfilePhoto}
          source={{
            uri: this.props.userProfilePhoto,
            width: 80,
            height: 80
          }}
        />
        <Text style={styles.linkButton}>
          Welcome, {this.props.userName}!
        </Text>
      </View>
    );
  };

  renderRow(rowData) {
    return (
      <View style={styles.cityCard}>
        <TouchableOpacity onPress={() => this.selectOffice(rowData)} style={styles.cityButton}>
          <Text style={styles.cityText}>
            {rowData}
          </Text>
        </TouchableOpacity>
      </View>
    );
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Swipe and tap to find locations in your city
          </Text>
        </View>
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
}

const circle = {
  borderWidth: 0,
  borderRadius: 60,
  width: 120,
  height: 120
};

const styles = StyleSheet.create({
  row: {
    flex: 1
  },
  swiper: {
    flex: 1
  },
  title: {
    fontSize: 15
  },
  titleContainer: {
    alignItems: 'center',
    top: 50
  },
  cityCard: {
    flex: 1,
    overflow: 'hidden',
    width: window.width,
    height: window.height - 150, // TODO define tabbar and nav height
    alignItems: 'center',
    justifyContent: 'center'
  },
  cityText: {
    fontSize: 20
  },
  cityButton: {
    ...circle,
    backgroundColor: '#41ae4e',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default CityView;
