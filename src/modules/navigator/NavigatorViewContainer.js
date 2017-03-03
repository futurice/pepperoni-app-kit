import {connect} from 'react-redux';
import AppNavigatorView from './NavigatorView';

export default connect(
  state => ({
    navigatorState: state.get('navigatorState').toJS()
  })
)(AppNavigatorView);
