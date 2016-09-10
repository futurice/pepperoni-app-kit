import _ from 'underscore';
import store from '../redux/store';
import {loginUser} from './backScratchService';
import * as UserStateActions from '../modules/user/UserState';

export default function appLogin(email) {
  loginUser(email)
    .then(res => {
      console.log(res);
      // if no user in app
      if (!res.length) {
        // redirect to user signup scence
        return console.log('no user found');
      }
      let user = _.extend(res[0].user.properties, {userId: res[0].user._id});
      console.log(user);
      return store.dispatch(UserStateActions.onExistingUser(user));
    });
}
