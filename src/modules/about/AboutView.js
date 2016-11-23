import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import * as theme from '../../utils/theme';

class AboutView extends Component {
  renderHeader() {
    return (
        <View style={styles.header}>
          <Image source={require('../../../assets/sample-app-header.png')}/>
        </View>);
  }

  renderBody() {
    return (
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            Pepperoni is a free and open-source blueprint
            to kickstart your mobile product development for Android and iOS,
            powered by React Native
          </Text>
        </View>);
  }

  renderFooter() {
    const futuriceImage = require('../../../assets/futurice-logo.png');
    return (
        <View style={styles.footer}>
          <Text style={styles.bodyText}>
            Brought to you by
          </Text>
          <Image source={futuriceImage}/>
        </View>);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background
  },
  header: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  bodyText: {
    fontSize: 18,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'System'
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default AboutView;
