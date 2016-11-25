# Auth0

Pepperoni used to be bundled with [Auth0](https://auth0.com/) but it has been removed by popular request.

You can follow this guide to get it back.

## Installation

First, get the `react-native-lock` npm package.

```bash
$ npm i -S react-native-lock@futurice/react-native-lock#feature/customizedTheme
```

Then link the package to IOS and Android builds with the `link` command:

```bash
$ react-native link react-native-lock
```

## Usage

You can see example of code used in Pepperoni when Auth0 was still bundled [here](https://github.com/futurice/pepperoni-app-kit/tree/e57bdac1cab657b25fb636cd31e4f630056dc95b).

The files you'll be interested in are:

* [`src/modules/auth/AuthState.js`](https://github.com/futurice/pepperoni-app-kit/blob/e57bdac1cab657b25fb636cd31e4f630056dc95b/src/modules/auth/AuthState.js) (and [`src/modules/auth/__specs__/AuthState.spec.js`](https://github.com/futurice/pepperoni-app-kit/blob/e57bdac1cab657b25fb636cd31e4f630056dc95b/src/modules/auth/__specs__/AuthState.spec.js))
* [`src/services/auth0.js`](https://github.com/futurice/pepperoni-app-kit/blob/e57bdac1cab657b25fb636cd31e4f630056dc95b/src/services/auth0.js)
* [`src/redux/reducer.js`](https://github.com/futurice/pepperoni-app-kit/blob/e57bdac1cab657b25fb636cd31e4f630056dc95b/src/redux/reducer.js#L10)
* [`src/components/DeveloperMenu.android.js`](https://github.com/futurice/pepperoni-app-kit/blob/e57bdac1cab657b25fb636cd31e4f630056dc95b/src/components/DeveloperMenu.android.js#L33)
* [`src/components/DeveloperMenu.ios.js`](https://github.com/futurice/pepperoni-app-kit/blob/e57bdac1cab657b25fb636cd31e4f630056dc95b/src/components/DeveloperMenu.ios.js#L31)
* [`src/modules/AppView.js`](https://github.com/futurice/pepperoni-app-kit/blob/e57bdac1cab657b25fb636cd31e4f630056dc95b/src/modules/AppView.js#L33)
* [`src/modules/AppViewContainer.js`](https://github.com/futurice/pepperoni-app-kit/blob/e57bdac1cab657b25fb636cd31e4f630056dc95b/src/modules/AppViewContainer.js#L6-L7)
* [`src/modules/counter/CounterViewContainer.js`](https://github.com/futurice/pepperoni-app-kit/blob/e57bdac1cab657b25fb636cd31e4f630056dc95b/src/modules/counter/CounterViewContainer.js#L8-L9)
