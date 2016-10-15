import {connect} from 'react-redux';
import CityView from './CityView';

export default connect(
  state => ({
    office: state.getIn(['city', 'value']),
    loading: state.getIn(['city', 'loading']),
    userName: state.getIn(['auth', 'currentUser', 'name']),
    userProfilePhoto: state.getIn(['auth', 'currentUser', 'picture'])
  })
)(CityView);
