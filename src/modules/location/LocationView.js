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

class LocationView extends Component {
  static displayName = 'LocationView';

  static propTypes = {
    office: PropTypes.number.isRequired,
    userName: PropTypes.string,
    userProfilePhoto: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    locationStateActions: PropTypes.shape({
      increment: PropTypes.func.isRequired,
      reset: PropTypes.func.isRequired,
      random: PropTypes.func.isRequired
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

  bored = () => {
    this.props.navigationStateActions.pushRoute({
      key: 'Color',
      title: 'Office Screen'
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
      <View style={styles.locationCard}>
        <TouchableOpacity onPress={this.selectOffice} style={styles.locationButton}>
          <Text style={styles.locationText}>
            {rowData}
          </Text>
        </TouchableOpacity>
      </View>
    );
  },

  render() {
    return (
      <View style={styles.contentSpacing}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Select your office:
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
  contentSpacing: {
    flex: 1,
    paddingTop: 64 //TODO generic
  },
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
  locationCard: {
    flex: 1,
    overflow: 'hidden',
    width: window.width,
    height: window.height - 150, // TODO define tabbar and nav height
    alignItems: 'center',
    justifyContent: 'center'
  },
  locationText: {
    fontSize: 20
  },
  locationButton: {
    ...circle,
    backgroundColor: '#41ae4e',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfilePhoto: {
    ...circle,
    alignSelf: 'center'
  },
  counterButton: {
    ...circle,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  counter: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    padding: 5
  },
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5
  }
});

export default LocationView;
