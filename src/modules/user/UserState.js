import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {loginUser} from '../../services/backScratchService';

// Initial state
const initialState = Map({
  loading: false,
  value: {}
});

// Actions
const USER_FOUND = 'UserState/USER_FOUND';

// Action creators

// export function userTasks(userId) {
//   return {
//     type: RANDOM_REQUEST,
//     payload: userId
//   };
// }

export function onExistingUser(user) {
  return {
    type: USER_FOUND,
    payload: fromJS(user)
  };
}

// export async function requestUserTasks() {
//   return {
//     type: USER_TASKS_RESPONSE,
//     payload: await getUserTasks()
//   };
// }

// Reducer
export default function UserStateReducer(state = initialState, action = {}) {
  switch (action.type) {

    case USER_FOUND:
      return state
        .set('value', action.payload);

    default:
      return state;
  }
}
