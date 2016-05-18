import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LocationView from './LocationView';
import * as NavigationStateActions from '../navigation/NavigationState';
import * as LocationStateActions from './LocationState';

export default connect(
  state => ({
    office: state.getIn(['location', 'value']),
    loading: state.getIn(['location', 'loading'])
  }),
  dispatch => {
    return {
      navigationStateActions: bindActionCreators(NavigationStateActions, dispatch),
      locationStateActions: bindActionCreators(LocationStateActions, dispatch)
    };
  }
)(LocationView);
