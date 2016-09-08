import {connect} from 'react-redux';
import ProfileView from './ProfileView';

export default connect(
  state => ({
    loading: state.getIn(['counter', 'loading']),
    userName: state.getIn(['auth', 'currentUser', 'name']),
    userProfilePhoto: state.getIn(['auth', 'currentUser', 'picture'])
  })
)(ProfileView);
