/*eslint-disable react/prop-types*/

import React from 'react';
import LocationViewContainer from './location/LocationViewContainer';
import PlacesViewContainer from './places/PlacesViewContainer';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const key = props.scene.route.key;

  if (key === 'Location') {
    return <LocationViewContainer />;
  }

  if (key.indexOf('Color') === 0) {
    const index = props.scenes.indexOf(props.scene);
    return (
      <PlacesViewContainer
        index={index}
      />
    );
  }

  throw new Error('Unknown navigation key: ' + key);
}
