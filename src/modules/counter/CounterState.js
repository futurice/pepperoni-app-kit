import {loop, Effects} from 'redux-loop-symbol-ponyfill';
import {generateRandomNumber} from '../../services/randomNumberService';

// Initial state
const initialState = {
  value: 0,
  loading: false
};

// Actions
const INCREMENT = 'CounterState/INCREMENT';
const RESET = 'CounterState/RESET';
const RANDOM_REQUEST = 'CounterState/RANDOM_REQUEST';
const RANDOM_RESPONSE = 'CounterState/RANDOM_RESPONSE';

// Action creators
export function increment() {
  return {type: INCREMENT};
}

export function reset() {
  return {type: RESET};
}

export function random() {
  return {
    type: RANDOM_REQUEST
  };
}

export async function requestRandomNumber() {
  return {
    type: RANDOM_RESPONSE,
    payload: await generateRandomNumber()
  };
}

// Reducer
export default function CounterStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      };

    case RESET:
      return initialState;

    case RANDOM_REQUEST:
      return loop(
        {
          ...state,
          loading: true
        },
        Effects.promise(requestRandomNumber)
      );

    case RANDOM_RESPONSE:
      return {
        ...state,
        loading: false,
        value: action.payload
      };

    default:
      return state;
  }
}
