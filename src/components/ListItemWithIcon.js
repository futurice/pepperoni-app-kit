import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import * as NavigationState from '../modules/navigation/NavigationState';
import * as TaskState from '../modules/tasks/TaskState';

import Helpers from '../utils/helpers';

const typeIcons = {
  domestic: require('../styles/icons/domestic.png'),
  errands: require('../styles/icons/errands.png'),
  handyman: require('../styles/icons/handyman.png'),
  informative: require('../styles/icons/informative.png'),
  miscellaneous: require('../styles/icons/miscellaneous.png'),
  physical_labor: require('../styles/icons/physical_labor.png')
};

const navigate = (rowData) => {
  rowData.dispatch(
    TaskState.selectTask(rowData)
  );
  rowData.dispatch(
    NavigationState.pushRoute({
      key: 'TaskDetail',
      title: 'Task Details'
    })
  );
};

const ListItemWithIcon = (rowData) => (
  <TouchableOpacity
    underlayColor='#dddddd'
    onPress={navigate.bind(null, rowData)}
  >
    <View>
      <View style={styles.container}>
        <Image style = {styles.icon}
          source={typeIcons[rowData.type.toLowerCase().replace(' ', '_')]}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{rowData.taskName}</Text>
          <Text style={styles.desc}>{Helpers.shortDesc(rowData.desc, 30)}</Text>
        </View>
      </View>
      <View style={styles.seperator} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10
  },
  seperator: {
    width: 400,
    height: 1,
    backgroundColor: '#BDBDBD'
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 15,
    marginLeft: 5
  },
  title: {
    color: '#212121',
    fontSize: 20,
    marginBottom: 4
  },
  desc: {
    color: '#757575'
  }
});

export default ListItemWithIcon;
