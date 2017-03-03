import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';
import ColorView from './ColorView';

export default connect(
   () => {
     return {
       index: 0 // TODO: add stack navigation for color screen
     };
   },
   dispatch => {
     return {
       navigate: bindActionCreators(NavigationActions.navigate, dispatch)
     };
   }
)(ColorView);
