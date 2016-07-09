import React, {PropTypes} from 'react';
import {
  Animated,
  NavigationExperimental as Navigation
} from 'react-native';

const NavigationTabView = React.createClass({
  propTypes: {
    router: PropTypes.func.isRequired,
    navigationState: PropTypes.object.isRequired,
    onNavigateBack: PropTypes.func.isRequired,
    onNavigateCompleted: PropTypes.func.isRequired,
    shouldRenderHeader: PropTypes.bool
  },

  getDefaultProps() {
    return {shouldRenderHeader: true};
  },

  renderHeader(props) {
    return (
      <Navigation.Header
        {...props}
        onNavigateBack={this.props.onNavigateBack}
        getTitle={state => state.key}
      />
    );
  },

  renderScene(props) {
    return (
      <Navigation.Card
        {...props}
        onNavigateBack={this.props.onNavigateBack}
        key={props.scene.route.key}
        renderScene={this.props.router}
      />
    );
  },

  render() {
    return (
      <Navigation.AnimatedView
        style={{flex: 1}}
        navigationState={this.props.navigationState}
        renderOverlay={this.props.shouldRenderHeader ? this.renderHeader : null}
        renderScene={this.renderScene}
        applyAnimation={(pos, navState) => {
          // This is the default animation. We redefine it here to be
          // able to attach a onComplete handler
          Animated
            .spring(pos, {toValue: navState.index, bounciness: 0})
            .start(() => {
              this.props.onNavigateCompleted();
            });
        }}
      />
    );
  }
});

export default NavigationTabView;
