/*eslint-disable react/prop-types*/

import React from 'react';
import {View} from 'react-native';
import CounterViewContainer from './counter/CounterViewContainer';
import TaskViewContainer from './tasks/TaskViewContainer';
import TaskManagerViewContainer from './taskManager/TaskManagerViewContainer';
import TaskFormViewContainer from './taskManager/taskForm/TaskFormViewContainer';
import TaskDetailViewContainer from './tasks/taskDetail/TaskDetailViewContainer';
import UserViewContainer from './user/UserViewContainer';
import ColorViewContainer from './colors/ColorViewContainer';
import NewUserModalViewContainer from './newUser/NewUserModalViewContainer';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const key = props.scene.route.key;

  if (key === 'Counter') {
    return <CounterViewContainer />;
  }

  if (key === 'TaskManager') {
    return <TaskManagerViewContainer />;
  }

  if (key === 'Tasks') {
    return <TaskViewContainer />;
  }

  if (key === 'NewTask') {
    return <TaskFormViewContainer />;
  }

  if (key === 'Profile') {
    return (
      <View>
        <NewUserModalViewContainer />
        <UserViewContainer />
      </View>
    );
  }

  if (key === 'TaskDetail') {
    return <TaskDetailViewContainer />;
  }

  // if Color is clicked more than once the 'key' is appended
  // with a number e.g.: 'Color_1'. Therefore `key === 'Color'` will not work
  if (key.indexOf('Color') === 0) {
    const index = props.scenes.indexOf(props.scene);
    return (
      <ColorViewContainer
        index={index}
      />
    );
  }

  throw new Error('Unknown navigation key: ' + key);
}
