import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {loginUser} from '../../services/backScratchService';

// Initial state
const initialState = Map({
  loading: false,
  value: {}
});

// Actions
const LOGIN = 'UserState/LOGIN';
const LOGIN_RESPONSE = 'UserState/LOGIN_RESPONSE';

// Action creators
export function login(email) {
  return {
    type: LOGIN,
    payload: email
  };
}

// export function userTasks(userId) {
//   return {
//     type: RANDOM_REQUEST,
//     payload: userId
//   };
// }

export async function requestUserLogin(email) {
  return {
    type: LOGIN_RESPONSE,
    payload: await loginUser(email)
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
    case LOGIN:
      return loop(
        state.set('loading', true),
        Effects.promise(requestUserLogin, action.payload)
      );

    case LOGIN_RESPONSE:
      return state
        .set('loading', false)
        .set('value', fromJS(action.payload));

    default:
      return state;
  }
}
