import {toJS} from 'immutable'; // eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import TaskDetailView from './TaskDetailView';

export default connect(
  state => ({
    task: state.getIn(['tasks', 'currentTask', 'value']).toJS(),
    loading: state.getIn(['tasks', 'currentTask', 'loading']),
    userId: state.getIn(['user', 'value', 'userId']),
    // userName: state.getIn(['auth', 'currentUser', 'name']),
    userProfilePhoto: state.getIn(['auth', 'currentUser', 'picture'])
  })
)(TaskDetailView);
