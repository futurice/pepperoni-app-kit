import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {pushRoute, popRoute, switchTab, navigationCompleted} from './NavigationState';
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
      replaceRoute: bindActionCreators(popRoute, dispatch),
      onNavigateCompleted() {
        // FIXME: why is navigationCompleted non-existant in NavigationState?
        // (causes bindActionCreators to fail)
        dispatch(navigationCompleted());
      }
    };
  }
)(NavigationView);
