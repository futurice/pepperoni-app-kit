import {connect} from 'react-redux';
import ProfileView from './ProfileView';

export default connect(
  state => ({
    userName: state.getIn(['auth', 'currentUser', 'name']),
    userProfilePhoto: state.getIn(['auth', 'currentUser', 'picture'])
  })
)(ProfileView);
