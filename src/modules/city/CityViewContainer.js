import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CityView from './CityView';
import * as NavigationStateActions from '../navigation/NavigationState';
import * as CityStateActions from './CityState';

export default connect(
  state => ({
    office: state.getIn(['city', 'value']),
    loading: state.getIn(['city', 'loading'])
  }),
  dispatch => {
    return {
      navigationStateActions: bindActionCreators(NavigationStateActions, dispatch),
      cityStateActions: bindActionCreators(CityStateActions, dispatch)
    };
  }
)(CityView);
