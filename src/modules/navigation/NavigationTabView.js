import React, {
  Animated,
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
        applyAnimation={(pos, navState) => {
          // This is the default animation. We redefine it here to be
          // able to attach a onComplete handler
          Animated
            .spring(pos, {toValue: navState.index, bounciness: 0})
            .start(() => {
              this.props.onNavigate({type: 'animation-completed'});
            });
        }}
      />
    );
  }
});

export default NavigationTabView;
