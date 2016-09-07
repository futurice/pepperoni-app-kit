/*eslint-disable react/prop-types*/

import React from 'react';
import CounterViewContainer from './counter/CounterViewContainer';
import TaskViewContainer from './tasks/TaskViewContainer';
import TaskManagerViewContainer from './taskManager/TaskManagerViewContainer';
import TaskFormViewContainer from './taskManager/taskForm/TaskFormViewContainer';
import ColorViewContainer from './colors/ColorViewContainer';

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
