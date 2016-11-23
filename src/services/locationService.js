import {
  RESPONSE_FAILURE,
  REQUEST_LOCATION_DETAILS,
  RESPONSE_SUCCESS_RETRY_LOCATION
} from '../modules/city/CityState';
import * as Utils from '../utils/Utils';
import * as env from '../../env';

const CLIENT_ID = env.SERVICE_CLIENT_ID;
const CLIENT_SECRET = env.SERVICE_CLIENT_SECRET;
const CATEGORY_ID = '4d4b7105d754a06374d81259'; //CatergoryId for 'Food'
const RADIUS = '500'; //In meters

var venues = [];

export function getPlace(city) {
  var url = 'https://api.foursquare.com/v2/venues/explore?' +
    'radius=' + RADIUS +
    '&categoryId=' + CATEGORY_ID +
    '&ll=' + city.latitude + ',' + city.longitude +
    '&v=' + Utils.getTodayFormatted() +
    '&client_id=' + CLIENT_ID +
    '&client_secret=' + CLIENT_SECRET;

  return fetch(url)
    .then(response => response.json())
    .then(jsonData => {
      venues = jsonData.response.groups[0].items;
      return getRamdonPlace(venues);
    })
    .then((place) => ({type: REQUEST_LOCATION_DETAILS, payload: place}))
    .catch((error) => ({type: RESPONSE_FAILURE, payload: error.message}));
}

export function getAnotherPlace(city, oldPlace) {
  var newPlace = oldPlace;
  while (newPlace.name === oldPlace.name) {
    newPlace = getRamdonPlace(venues);
  }
  return getInfoPlace(newPlace, RESPONSE_SUCCESS_RETRY_LOCATION);
}

function getRamdonPlace(places) {
  var place = places[Utils.getRamdonNumberBetweenRange(places.length, 0)].venue;
  return place;
}

export function getInfoPlace(location, typeResponse) {
  var url = 'https://api.foursquare.com/v2/venues/' +
    location.id +
    '?v=' + Utils.getTodayFormatted() +
    '&client_id=' + CLIENT_ID +
    '&client_secret=' + CLIENT_SECRET;

  return fetch(url)
    .then(response => response.json())
    .then(jsonData => jsonData.response.venue)
    .then((venue) => ({type: typeResponse, payload: venue}))
    .catch((error) => ({type: RESPONSE_FAILURE, payload: error.message}));
}
