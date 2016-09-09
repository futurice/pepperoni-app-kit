import {connect} from 'react-redux';
import TaskDetailView from './TaskDetailView';

export default connect(
  state => ({
    currTask: state.getIn(['tasks', 'currentTask', 'value']),
    loading: state.getIn(['tasks', 'currentTask', 'loading ']),
    userName: state.getIn(['auth', 'currentUser', 'name']),
    userProfilePhoto: state.getIn(['auth', 'currentUser', 'picture'])
  })
)(TaskDetailView);
