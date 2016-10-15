import {connect} from 'react-redux';
import LocationView from './LocationView';

export default connect(
  state => ({
    office: state.getIn(['city', 'value'])
  })
)(LocationView);
