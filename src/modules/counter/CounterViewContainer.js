import {connect} from 'react-redux';
import CounterView from './CounterView';

export default connect(
  state => ({
    counter: state.getIn(['counter', 'value']),
    loading: state.getIn(['counter', 'loading']),
    userName: state.getIn(['currentUser', 'name']),
    userProfilePhoto: state.getIn(['currentUser', 'picture'])
  })
)(CounterView);
