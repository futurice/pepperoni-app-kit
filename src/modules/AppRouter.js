/*eslint-disable react/prop-types*/

import React from 'react';
import CityViewContainer from './city/CityViewContainer';
import LocationViewContainer from './location/LocationViewContainer';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const key = props.scene.route.key;

  if (key === 'City') {
    return <CityViewContainer />;
  }

  if (key.indexOf('Location') === 0) {
    const index = props.scenes.indexOf(props.scene);
    return (
      <LocationViewContainer
        index={index}
      />
    );
  }

  throw new Error('Unknown navigation key: ' + key);
}
