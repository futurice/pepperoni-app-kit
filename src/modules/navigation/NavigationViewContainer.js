import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {pushRoute, popRoute, switchTab} from './NavigationState';
import NavigationView from './NavigationView';

export default connect(
  state => ({
    navigationState: state.get('navigationState').toJS()
  }),
  dispatch => {
    return {
      switchTab: bindActionCreators(switchTab, dispatch),
      pushRoute: bindActionCreators(pushRoute, dispatch),
      onNavigateBack: bindActionCreators(popRoute, dispatch),
      onNavigateCompleted: bindActionCreators(navigationCompleted, dispatch)
    };
  }
)(NavigationView);
