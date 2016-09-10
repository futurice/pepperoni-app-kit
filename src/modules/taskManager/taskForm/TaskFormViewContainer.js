import {connect} from 'react-redux';
import TaskFormView from './TaskFormView';

export default connect(
  state => ({
    userId: state.getIn(['user', 'value', 'userId'])
  })
)(TaskFormView);
