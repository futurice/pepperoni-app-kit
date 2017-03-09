import * as theme from '../../utils/theme';
import Button from '../../components/Button';
import PageIndicator from '../../components/PageIndicator';
import React, {PropTypes, Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ListView,
  Platform,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

const window = Dimensions.get('window');

// Futurice offices
const offices = require('../../data/sampleLocations.json');

class CityView extends Component {
  static displayName = 'CityView';

  static propTypes = {
    office: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    place: PropTypes.object,
    position: PropTypes.number.isRequired,
    cityStateActions: PropTypes.shape({
      selectOffice: PropTypes.func.isRequired,
      changePosition: PropTypes.func.isRequired
    }).isRequired
  }

  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(offices)
    };
  }

  selectOffice = (office) => {
    this.props.cityStateActions.selectOffice(office);
  }

  changePositionPager = (position) => {
    this.props.cityStateActions.changePosition(position);
  }

  renderRow = (rowData, section, index) => {
    // Show pageIndicator and button for Android on the row because the function
    // 'onChangeVisibleRows' does not work for Android
    let androidView = (Platform.OS === 'android')
      ? (<View style={styles.buttonsContainer}>
          <PageIndicator pageCount={offices.length}
            selectedIndex={+index}
            style={styles.pageIndicator} />
          <Button
              text="What's for lunch?"
              buttonStyle={theme.buttons.primary}
              textStyle={theme.fonts.primary}
              action={() => this.selectOffice(offices[index])} />
        </View>)
      : (<View/>);

    return (
      <View style={styles.cityCard}>
        <TouchableOpacity onPress={() => this.selectOffice(offices[index])}>
          <Image source={{uri: rowData.picture}} style={styles.image} />
        </TouchableOpacity>
        <Text style={[theme.fonts.h1, styles.title]}>
          {rowData.city.toUpperCase()}
        </Text>
        {androidView}
      </View>
    );
  }

  // This method is currently only working on iOS but not on Android
  onChangeVisibleRows = (visibleRows) => {
    const visibleRowNumbers = Object.keys(visibleRows.s1).map((row) => parseInt(row));
    if (visibleRowNumbers.length === 2) {
      // visible row is visibleRowNumbers[0]
      // but in the case of the last item it is visibleRowNumbers[1]
      if (visibleRowNumbers[1] === (offices.length - 1)) {
        this.changePositionPager(visibleRowNumbers[1]);

      } else {
        this.changePositionPager(visibleRowNumbers[0]);
      }
    }
    if (visibleRowNumbers.length === 3) {
      // visible row is visibleRowNumbers[1]
      this.changePositionPager(visibleRowNumbers[1]);
    }
  }

  render() {
    var spinner = this.props.loading
      ? (<ActivityIndicator style={styles.spinner} size='large' color='white'/>)
      : (<View/>);

    // Hide pageIndicator and button for Android because the function
    // 'onChangeVisibleRows' does not work for Android
    let iosView = (Platform.OS === 'ios')
      ? (<View style={styles.buttonsContainer}>
          <PageIndicator pageCount={offices.length}
            selectedIndex={this.props.position}
            style={styles.pageIndicator} />
          <Button
              text="What's for lunch?"
              buttonStyle={theme.buttons.primary}
              textStyle={theme.fonts.primary}
              action={() => this.selectOffice(offices[this.props.position])} />
         </View>)
      : (<View/>);

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
          onChangeVisibleRows={this.onChangeVisibleRows}
        />
        {iosView}
        {spinner}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  swiper: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center'
  },
  cityCard: {
    flex: 1,
    overflow: 'hidden',
    width: window.width,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20
  },
  image: {
    height: 180,
    width: 180,
    borderRadius: 90,
    borderWidth: 3,
    borderColor: theme.colors.tab
  },
  title: {
    marginTop: 20
  },
  pageIndicator: {
    marginBottom: 20
  },
  buttonsContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center'
  },
  spinner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: window.height,
    backgroundColor: theme.colors.spinner
  }
});

export default CityView;
