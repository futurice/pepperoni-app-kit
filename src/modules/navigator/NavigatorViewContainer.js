import {connect} from 'react-redux';
import NavigatorView from './NavigatorView';

export default connect(
  state => ({
    navigatorState: state.get('navigatorState').toJS()
  })
)(NavigatorView);
