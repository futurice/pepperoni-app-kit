import {connect} from 'react-redux';
import PlacesView from './PlacesView';

export default connect(
  state => ({
    office: state.getIn(['city', 'value'])
  })
)(PlacesView);
