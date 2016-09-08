import {connect} from 'react-redux';
import ProfileView from './ProfileView';

export default connect(
  state => ({
    userName: state.getIn(['auth', 'currentUser', 'name']),
    userId: state.getIn(['auth', 'currentUser', 'userId']),
    userProfilePhoto: state.getIn(['auth', 'currentUser', 'picture']),
    rating: state.getIn(['user', 'rating']),
    coins: state.getIn(['user', 'coins']),
    tasksCompleted: state.getIn('user', 'tasksCompleted'),
    assignedTasks: state.getIn(['user', 'assignedTasks']),
    requestedTasks: state.getIn(['user', 'requestedTasks']),
    bio: state.getIn(['user', 'bio']),
    loading: state.getIn(['user', 'loading'])
  })
)(ProfileView);
