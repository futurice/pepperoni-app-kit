import React from 'react';
import {Text, View} from 'react-native';

const ListItemWithRating = (rowData) => (
  <View>
    <Text>{rowData.taskName}</Text>
    <Text>{rowData.desc}</Text>
  </View>
);

export default ListItemWithRating;
