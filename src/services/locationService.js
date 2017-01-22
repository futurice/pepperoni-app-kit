import {random} from 'lodash';

// Load sample locations from JSON file
const locationData = require('../data/sampleLocations.json');

export function getRandomLocation(city = 'London') {
  return locationData[city][random(0, locationData[city].length - 1)];
}
