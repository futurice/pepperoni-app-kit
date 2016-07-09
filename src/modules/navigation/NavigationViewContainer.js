import {connect} from 'react-redux';
import {popRoute, switchTab, navigationCompleted} from './NavigationState';
import NavigationView from './NavigationView';

export default connect(
  state => ({
    navigationState: state.get('navigationState').toJS()
  }),
  dispatch => ({
    switchTab(index) {
      dispatch(switchTab(index));
    },
    onNavigateBack() {
      dispatch(popRoute());
    },
    onNavigateCompleted() {
      dispatch(navigationCompleted());
    }
  })
)(NavigationView);
