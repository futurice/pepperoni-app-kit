import {connect} from 'react-redux';
import LocationView from './LocationView';

export default connect(
  state => ({
    office: state.getIn(['location', 'value']),
    loading: state.getIn(['location', 'loading']),
    userName: state.getIn(['auth', 'currentUser', 'name']),
    userProfilePhoto: state.getIn(['auth', 'currentUser', 'picture'])
  })
)(LocationView);
