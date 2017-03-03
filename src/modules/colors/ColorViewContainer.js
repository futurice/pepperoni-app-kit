import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';
import ColorView from './ColorView';

export default connect(
   null,
   dispatch => {
     return {
       navigate: bindActionCreators(NavigationActions.navigate, dispatch)
     };
   }
)(ColorView);
