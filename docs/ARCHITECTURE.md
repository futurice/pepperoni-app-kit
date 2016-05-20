# Architecture

:warning: **WORK IN PROGRESS**

The Starter Kit architecture is designed to support scalable, modularised applications. Built around [Redux](http://redux.js.org/), it makes it simple to reason about your application's state, and as a result to write maintainable, error-free programs.

The downside of the Starter Kit architecture is that it involves a number of novel concepts, which might take a while to grok for the uninitiated. This document aims to explain the what, why and how of building apps the Starter Kit way.

## Pieces of the puzzle

 * [Redux](http://redux.js.org/)
 * [redux-loop](https://github.com/raisemarketplace/redux-loop)
 * [ImmutableJS](https://facebook.github.io/immutable-js)

The application state and state changes are managed by **Redux**, a library that implements a pure, side-effect-free variant of the Facebook [Flux](https://facebook.github.io/flux/) architecture. Redux and Flux prescribe a unidirectional dataflow through your application. To understand Redux, check out this [Cartoon guide by Lin Clark](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.4dpmozm9v) (it's great, not a joke!) and [Dan Abramov's Redux course on egghead.io](https://egghead.io/series/getting-started-with-redux).

Redux helps us with synchronous updating of our state, but it doesn't provide an out-of-the-box solution for handling asynchronous actions. The Redux ecosystem has many possible solutions for this problem. In our application, we use the vanilla redux-thunk middleware for simple asynchronous actions, and **redux-loop** to handle more complex asynchronicity.

The state in Redux applications should never be mutated, but always cloned. To make this more natural for the programmer, and more fault-tolerant against accidental mutation, we use **ImmutableJS** data structures to hold our app's state.

## Organising code

Let's take a look of how we organise our application.

### Components

The `components` directory should contain React Native JSX components, which take their inputs in as `props`. In Flux/Redux parlance the components should be dumb/presentation components, meaning that components should not be `connect()`ed to the redux store directly, but instead used by smart/container components.

The components may be stateful if it makes sense, but do consider externalising state to the Redux store instead. If the state needs to be persisted, shared by other components, or inspected by a developer in order to understand the program state, it should go in the Redux store.

A component may be either written as a `React.createClass` constructor or as a plain JavaScript function component. Usage of ES6 `class Foo extends React.Component` should be [generally speaking avoided](https://github.com/joshburgess/not-awesome-es6-classes).

If a component implementation differs between iOS and Android versions of the application, [create separate `.android.js` and `.ios.js` files](https://facebook.github.io/react-native/docs/platform-specific-code.html) for the component. In minor cases the `React.Platform.OS` property can be used to branch between platforms.

### Modules

The `modules` directory contains most of the interesting bits of the application. As a rule of thumb, this is where all code that modifies that application state or reads it from the store should go.

Each module is its own directory and represents a "discrete domain" within the application. There is no hard and fast rule on how to split your application into modules (in fact, this is one of the most difficult decisions in designing a Redux application), but here are some qualities of a good module:

 * Represents a screen in the application, or a collection of screens that form a feature.
 * Represents some technical feature that needs its own state (e.g. `navigation`).
 * Rarely needs to use data from other modules' states.
 * Doesn't contain data that is often needed by other modules.

#### Anatomy of a Module

At its simplest, a module contains three logical part: **State**, **View(s)** and **Container(s)**. All of these are optional, i.e. a component may or may not a have a View. If a module consists only of a View, though, do consider making it a component instead.

##### State

The **State** encapsulates... err... well, the state of the application, and any actions that can modify that state. State can be data, for example fetched from a server or created by the user in-app, or it may be something transient, such as whether the user is logged into the application, or whether a particular UI element should be displayed or not.

The State part of the module is a [Redux Duck](https://github.com/erikras/ducks-modular-redux) - a file that contains a Reducer, Action Creators and the initial state of the application.

Let's take a simple example of an application that displays a number, which the user can increment by pressing a *plus* button, and decrement using a *minus* button.

```js
// CounterState.js
import {Map} from 'immutable';

// INITIAL STATE
//
// We start by defining the initial state for this module. In most cases your
// module state will be an Immutable.Map. Even if your data is represented as a
// list, set or a primitive value, it's usually best to wrap it in a Map for
// maximum flexibility when refactoring your state

const initialState = Map({
  value: 0
});

// ACTION TYPES (Naming: SCREAMING_CASE)
//
// Let's define constants for the action types. The action types must be globally unique,
// so we namespace them with a prefix to avoid accidental collisions. It also helps to make
// the action name descriptive, as it helps with debugging. In most cases the action constants
// will be private to the State file, but in some advanced scenarios may be exported

const UPDATE_NUMBER = 'CounterState/UPDATE_NUMBER';

// ACTION CREATORS (Naming: camelCase)
//
// Action creators are functions whose responsibility is to encapsulate the creation of the
// messages passed to the reducer. Their API should be consumer-friendly and hide as much of
// the internal implementation of the state update as possible.
//
// At their simplest Action creators just construct a Flux Standard Action -compliant action.
// Other times they may call asynchronous services and rely on a Redux middleware.
//
// Action creators are always named exports, `export function name() {...}`, or `export const name = ...`

export function increment() {
  return {type: UPDATE_NUMBER, payload: +1};
}

export function decrement() {
  return {type: UPDATE_NUMBER, payload: -1};
}

// REDUCER (Naming: PascalCase)
//
// Reducer is responsible for handling all the actions defined in this module. The first
// parameter is the previous state of this module, and should default to the initial state.
//
// The reducer then examines the `action` object and decides whether any state should change in
// response to that action. The reducer must return the updated state, or if no changes are made,
// the previous state without modifications.
//
// The reducer is always an ES6 default export.

export default function CounterStateReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NUMBER:
      return state.update('value', value => value + action.payload);
    default:
      return state;
  }
}
```

The Redux Ducks pattern aims to keep the code portable, contained and easy to refactor by co-locating the reducer with action creators. For complex modules, the Duck can get quite long and make it difficult to maintain, in which case it should be split into smaller chunks, either by separating the reducer into its own file or by splitting the state into smaller Ducks and combining the reducers using standard Redux split/combine strategies.

##### View

Typically the **View** represents the screen in the application. A module may have multiple views, if the part of the application consists of multiple screens, or if the single view is too complex to write in a single file.

Technically speaking the View is identical to a component we define in the `components` directory. The difference is the way we use them. Ideally, the View's role is to orchestrate reusable components. The view can be aware of what the application state looks like and which actions update it, whereas a component should not `dispatch` things directly, and have their `props` API designed around the purpose of the component, not the state of the application.

The View usually has some presentational components and styling, but usually the leaner the view the better. If a view implementation needs to be very different on iOS and Android, separate `.android.js` and `ios.js` files may be written. However, for maintainability purposes, it is better if the platform-specific implementation can be done on `component` level, and the View can remain platform-agnostic.

A View should take all inputs as `props`, and should very, very rarely, if ever, be stateful. Instead, the state should be managed in Redux, and injected to the component props by the container.

To continue the Counter example, a view might look something like this:

```js
import React, {PropTypes, StyleSheet, Text, View} from 'react-native';
import ActionButton from '../../components/ActionButton';
import * as CounterState from './CounterState';

const CounterView = React.createClass({
  // state (value) and action dispatcher are provided as props
  propTypes: {
    value: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  },

  render() {
    const {value, dispatch} = this.props;
    // use reusable components (ActionButton) to dispatch actions created by CounterState action creators
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>{value}</Text>
        <ActionButton onPress={() => dispatch(CounterState.increment())} text='+' />
        <ActionButton onPress={() => dispatch(CounterState.decrement())} text='-' />
      </View>
    );
  }
});

// styles are defined inline
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  counter: {
    textAlign: 'center',
    fontSize: 40
  }
});

export default CounterView;
```

##### Container

The **Container** (or **View Container**) is responsible for `connect()`ing the View component to the Redux store.


Redux `connect()` takes in two arguments, first `mapStateToProps` which selects relevant parts of the application state to pass to the view, and second `mapActionsToProps`, which binds Action Creators to the store's dispatcher so the actions are executed in the right context. These functions are often called *selectors*.

We think using `mapStateToProps` is a good practice, but avoid using `mapActionsToProps` in favour of calling `dispatch` ourselves in the view. In our experience this leads to simpler, easier to reason about code (and a little less verbose PropTypes on the View).

Every time the app state changes, the Container is automatically called with the latest state. If the props returned by the container differ from the previous props, the connected View is re-rendered. If the props are identical, the view is not re-rendered. For this reason it's a good idea to define your props as ImmutableJS data structures or JavaScript primitives, because if you `toJS()` your immutable `Map`s and `Lists` to objects and arrays in the Container, the results of each pass are not referentially equal, and we lose the benefit of this performance optimisation.

Using the Counter example, the container would be very simple:

```js
import {connect} from 'react-redux';
import CounterView from './CounterView';

// pass the counter's value to the component as a prop called `value`.
// Because we omit the second parameter, the `dispatch` function is
// automatically passed as a prop.
export default connect(
  state => ({
    value: state.getIn(['counter', 'value'])
  })
)(CounterView);
```

Often this file doesn't contain a lot of code, but it's important to define the Container in its own file anyway to be able to support platform-specific view implementations, as well as test the Views and their data bindings separately.

If a View needs data from other modules (i.e. other parts of the application state than the subtree managed by that module), the Container is the correct place to access. In database-speak, this way you can keep your data "normalized" (to a degree), and "join" them when required.
