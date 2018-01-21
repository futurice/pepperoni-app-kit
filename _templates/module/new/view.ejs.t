---
to: src/modules/<%= name %>/<%= Name %>View.js
---
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View
} from 'react-native';

class <%= Name %>View extends Component {
  static displayName = '<%= Name %>View';

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

export default <%= Name %>View;