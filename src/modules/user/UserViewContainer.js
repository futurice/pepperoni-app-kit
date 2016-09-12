import {connect} from 'react-redux';
import UserView from './UserView';

export default connect(
  state => ({
    userName: state.getIn(['user', 'value', 'username']),
    userId: state.getIn(['user', 'value', 'userId']),
    userProfilePhoto: state.getIn(['auth', 'currentUser', 'picture']),
    rating: state.getIn(['user', 'value', 'rating']),
    coins: state.getIn(['user', 'value', 'coins']),
    completedTasks: state.getIn(['tasks', 'value']),
    assignedTasks: state.getIn(['user', 'value', 'assignedTasks']),
    requestedTasks: state.getIn(['user', 'value', 'requestedTasks']),
    bio: state.getIn(['user', 'value', 'bio']),
    loading: state.getIn(['user', 'loading'])
  })
)(UserView);
