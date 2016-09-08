import React from 'react';
import {TouchableHighlight, Text, View, Image, StyleSheet} from 'react-native';
import Helpers from '../utils/helpers';

const ListItemWithIcon = (rowData) => (
  <TouchableHighlight underlayColor='#dddddd'>
    <View>
      <View style={styles.container}>
        <Image
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{rowData.taskName}</Text>
          <Text style={styles.desc}>{Helpers.shortDesc(rowData.desc)}</Text>
        </View>
      </View>
      <View style={styles.seperator} />
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15
  },
  seperator: {
    height: 1,
    backgroundColor: '#BDBDBD'
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  title: {
    color: '#212121',
    fontSize: 20,
    marginBottom: 8
  },
  desc: {
    color: '#757575'
  }
});

export default ListItemWithIcon;
