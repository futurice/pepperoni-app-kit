import {connect} from 'react-redux';
import TaskView from './TaskView';

export default connect(
  state => ({
    // put tasks here
    tasks: state.getIn(['tasks', 'value']),
    loading: state.getIn(['tasks', 'loading']),
    userName: state.getIn(['auth', 'currentUser', 'name']),
    userProfilePhoto: state.getIn(['auth', 'currentUser', 'picture'])
  })
)(TaskView);
