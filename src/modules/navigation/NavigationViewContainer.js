import {connect} from 'react-redux';
import {popRoute} from './NavigationState';
import NavigationView from './NavigationView';

export default connect(
  state => ({
    navigationState: state.get('navigationState')
  }),
  dispatch => ({
    onNavigate(action) {
      if (action.type === 'back' || action.type === 'BackAction') {
        dispatch(popRoute());
      }
    }
  })
)(NavigationView);
