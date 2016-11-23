/*eslint-disable react/prop-types*/

import React from 'react';
import CityViewContainer from './city/CityViewContainer';
import LocationViewContainer from './location/LocationViewContainer';
import AboutView from './about/AboutView';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const route = props.scene.route;
  const key = route.key;

  if (key === 'City') {
    return <CityViewContainer />;
  }

  if (key === 'Location') {
    return (
      <LocationViewContainer
        place={route.place}
      />
    );
  }

  if (key === 'About') {
    return <AboutView />;
  }

  throw new Error('Unknown navigation key: ' + key);
}
