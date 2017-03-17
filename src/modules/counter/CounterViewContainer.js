import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CounterView from './CounterView';
import * as NavigationStateActions from '../navigation/NavigationState';
import * as CounterStateActions from '../counter/CounterState';

export default connect(
  state => ({
    counter: state.counter.value,
    loading: state.counter.loading
  }),
  dispatch => {
    return {
      navigationStateActions: bindActionCreators(NavigationStateActions, dispatch),
      counterStateActions: bindActionCreators(CounterStateActions, dispatch)
    };
  }
)(CounterView);
