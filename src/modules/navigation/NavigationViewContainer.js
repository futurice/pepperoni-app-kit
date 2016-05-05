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
    onNavigate(action) {
      // The "back" and "BackAction" actions are fired from NavigationExperimental when
      // the user swipes the screen back or uses the software back button, respectively.
      // We handle these and dispatch our custom back action to our Redux stack.
      //
      // Android back button is handled separately in index.android.js
      if (action.type === 'back' || action.type === 'BackAction') {
        dispatch(popRoute());
      } else if (action.type === 'animation-completed') {
        dispatch(navigationCompleted());
      }
    }
  })
)(NavigationView);
