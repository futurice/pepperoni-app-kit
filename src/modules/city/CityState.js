import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {getPlace, getAnotherPlace, getInfoPlace} from '../../services/locationService';
import * as NavigationState from '../../modules/navigation/NavigationState';

// Initial state
const initialState = Map({
  value: {},
  loading: false,
  place: {},
  position: 0
});

const REQUEST_OFFICE = 'REQUEST_OFFICE';
export const REQUEST_LOCATION_DETAILS = 'REQUEST_LOCATION_DETAILS';
const RESPONSE_SUCCESS_LOCATION_DETAILS = 'RESPONSE_SUCCESS_LOCATION_DETAILS';
const REQUEST_RETRY_LOCATION = 'REQUEST_RETRY_LOCATION';
export const RESPONSE_SUCCESS_RETRY_LOCATION = 'RESPONSE_SUCCESS_RETRY_LOCATION';
export const RESPONSE_FAILURE = 'RESPONSE_FAILURE';
const POSITION_CHANGED = 'POSITION_CHANGED';

// Action creators
export function selectOffice(office) {
  return {
    type: REQUEST_OFFICE,
    payload: office
  };
}

export function retryPlace(office, oldPlace) {
  return {
    type: REQUEST_RETRY_LOCATION,
    payload: {
      office,
      oldPlace
    }
  };
}

export function changePosition(position) {
  return {
    type: POSITION_CHANGED,
    payload: position
  };
}

// Reducer
export default function CityStateReducer(state = initialState, action = {}) {
  let office = state.get('value');

  switch (action.type) {
    case REQUEST_OFFICE:
      return loop(
        state
          .set('loading', true)
          .set('value', action.payload), //office
        Effects.promise(getPlace, action.payload)
      );

    case REQUEST_LOCATION_DETAILS:
      return loop(
        state.set('place', action.payload), //place without details
        Effects.promise(getInfoPlace, action.payload, RESPONSE_SUCCESS_LOCATION_DETAILS)
      );

    case RESPONSE_SUCCESS_LOCATION_DETAILS:
      return loop(
        state
          .set('loading', false)
          .set('place', action.payload), //place with details
        Effects.constant(NavigationState.pushRoute({
          key: 'Location',
          title: office.city
        }))
      );

    case REQUEST_RETRY_LOCATION:
      return loop(
        state
          .set('loading', true)
          .set('value', action.payload.office),
        Effects.promise(getAnotherPlace, action.payload.office, action.payload.oldPlace)
      );

    case RESPONSE_SUCCESS_RETRY_LOCATION:
      return state
        .set('loading', false)
        .set('place', action.payload);

    case POSITION_CHANGED:
      return state.set('position', action.payload);

    case RESPONSE_FAILURE:
      return state
        .set('loading', false)
        .set('errorMessage', action.payload);

    default:
      return state;
  }
}
