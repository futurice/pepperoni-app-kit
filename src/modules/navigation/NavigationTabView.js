import React, {
  PropTypes,
  NavigationExperimental as Navigation
} from 'react-native';

const NavigationTabView = React.createClass({
  propTypes: {
    router: PropTypes.func.isRequired,
    navigationState: PropTypes.object.isRequired,
    onNavigate: PropTypes.func.isRequired,
    shouldRenderHeader: PropTypes.bool
  },

  getDefaultProps() {
    return {shouldRenderHeader: true};
  },

  renderHeader(props) {
    return (
      <Navigation.Header
        navigationProps={props}
        getTitle={state => state.key}
      />
    );
  },

  renderScene(props) {
    return (
      <Navigation.Card
        {...props}
        key={props.scene.navigationState.key}
        renderScene={this.props.router}
      />
    );
  },

  render() {
    return (
      <Navigation.AnimatedView
        style={{flex: 1}}
        navigationState={this.props.navigationState}
        onNavigate={this.props.onNavigate}
        renderOverlay={this.props.shouldRenderHeader ? this.renderHeader : null}
        renderScene={this.renderScene}
      />
    );
  }
});

export default NavigationTabView;
