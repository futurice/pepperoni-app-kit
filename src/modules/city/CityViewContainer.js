import {connect} from 'react-redux';
import CityView from './CityView';

export default connect(
  state => ({
    office: state.getIn(['city', 'value']),
    loading: state.getIn(['city', 'loading'])
  })
)(CityView);
