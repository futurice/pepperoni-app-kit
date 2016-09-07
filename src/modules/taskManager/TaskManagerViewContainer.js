import {connect} from 'react-redux';
import TaskManagerView from './TaskManagerView';

export default connect(
  state => ({
    counter: state.getIn(['counter', 'value']),
    loading: state.getIn(['counter', 'loading']),
    userName: state.getIn(['auth', 'currentUser', 'name']),
    userProfilePhoto: state.getIn(['auth', 'currentUser', 'picture'])
  })
)(TaskManagerView);
