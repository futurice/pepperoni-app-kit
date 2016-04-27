# Architecture

:warning: **WORK IN PROGRESS**

The Starter Kit architecture is designed to support scalable, modularised applications. Built around [Redux](http://redux.js.org/), it makes it simple to reason about your application's state, and as a result to write maintainable, error-free programs.

The downside of the Starter Kit architecture is that it involves a number of novel concepts, which might take a while to grok for the uninitiated. This document aims to explain the what, why and how of building apps the Starter Kit way.

## Pieces of the puzzle

 * [Redux](http://redux.js.org/)
 * [redux-loop](https://github.com/raisemarketplace/redux-loop)
 * [ImmutableJS](https://facebook.github.io/immutable-js)

The application state and state changes are managed by **Redux**, a library that implements a pure, side-effect-free variant of the Facebook Flux architecture. Redux and Flux prescribe a unidirectional dataflow through your application. 

To understand Redux, check out this [Cartoon guide by Lin Clark](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.4dpmozm9v) (it's great, not a joke!) and [Dan Abramov's Redux course on egghead.io](https://egghead.io/series/getting-started-with-redux).
