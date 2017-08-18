// Initial state
const initialState = {
  value: 0,
};

// Actions
const INCREMENT = 'CounterState/INCREMENT';
const RESET = 'CounterState/RESET';
const RANDOM_REQUEST = 'CounterState/RANDOM_REQUEST';
const RANDOM_RESPONSE = 'CounterState/RANDOM_RESPONSE';

// Action creators
export const increment = () => ({ type: INCREMENT });
export const reset = () => ({ type: RESET });

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };

    case RESET:
      return initialState;

    default:
      return state;
  }
};
