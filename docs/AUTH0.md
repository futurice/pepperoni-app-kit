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

You can see exemple of code used in Pepperoni when Auth0 was still bundled [here](549fd09e).

The files you'll be interrested in are:

* [`src/modules/auth/AuthState.js`](https://github.com/futurice/pepperoni-app-kit/blob/549fd09ef153b4908a5a56482b81dbea7dc7fb2f/src/modules/auth/AuthState.js) (and [`src/modules/auth/__specs__/AuthState.spec.js`](https://github.com/futurice/pepperoni-app-kit/blob/549fd09ef153b4908a5a56482b81dbea7dc7fb2f/src/modules/auth/__specs__/AuthState.spec.js))
* [`src/services/auth0.js`](https://github.com/futurice/pepperoni-app-kit/blob/549fd09ef153b4908a5a56482b81dbea7dc7fb2f/src/services/auth0.js)
* [`src/redux/reducer.js`](https://github.com/futurice/pepperoni-app-kit/blob/549fd09ef153b4908a5a56482b81dbea7dc7fb2f/src/redux/reducer.js#L10)
* [`src/components/DeveloperMenu.android.js`](https://github.com/futurice/pepperoni-app-kit/blob/549fd09ef153b4908a5a56482b81dbea7dc7fb2f/src/components/DeveloperMenu.android.js#L33)
* [`src/components/DeveloperMenu.ios.js`](https://github.com/futurice/pepperoni-app-kit/blob/549fd09ef153b4908a5a56482b81dbea7dc7fb2f/src/components/DeveloperMenu.ios.js#L31)
* [`src/modules/AppView.js`](https://github.com/futurice/pepperoni-app-kit/blob/549fd09ef153b4908a5a56482b81dbea7dc7fb2f/src/modules/AppView.js#L33)
* [`src/modules/AppViewContainer.js`](https://github.com/futurice/pepperoni-app-kit/blob/549fd09ef153b4908a5a56482b81dbea7dc7fb2f/src/modules/AppViewContainer.js#L6-L7)
* [`src/modules/counter/CounterViewContainer.js`](https://github.com/futurice/pepperoni-app-kit/blob/549fd09ef153b4908a5a56482b81dbea7dc7fb2f/src/modules/counter/CounterViewContainer.js#L8-L9)
