import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LocationView from './LocationView';
import * as CityStateActions from '../city/CityState';
import * as NavigationStateActions from '../navigation/NavigationState';

export default connect(
  state => ({
    office: state.getIn(['city', 'value']),
    loading: state.getIn(['city', 'loading']),
    place: state.getIn(['city', 'place'])
  }),
  dispatch => {
    return {
      navigationStateActions: bindActionCreators(NavigationStateActions, dispatch),
      cityStateActions: bindActionCreators(CityStateActions, dispatch)
    };
  }
)(LocationView);
