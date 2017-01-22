import {Map} from 'immutable';

// Initial state
const initialState = Map({
  value: '',
  loading: false
});

const SELECT_OFFICE = 'CityState/SELECT_OFFICE';

// Action creators

export function selectOffice(office) {
  return {
    type: SELECT_OFFICE,
    payload: office
  };
}

// Reducer
export default function CityStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SELECT_OFFICE:
      return state
        .set('value', action.payload);

    default:
      return state;
  }
}
