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

### Configuration

If you don't want to use Auth0, or you want to take it into use later, you can skip this step for now.

1. Before you start you need to create a new application in [Auth0](https://manage.auth0.com/#/applications/)
2. Set `AUTH0_CLIENT_ID` and `AUTH0_DOMAIN` in `env.js` according to your application you created in Auth

        AUTH0_CLIENT_ID: '<CLIENT_ID>',
        AUTH0_DOMAIN: '<ACCOUNT_NAME>.eu.auth0.com'

3. Follow the steps for your platform below. Check the [official instructions](https://github.com/auth0/react-native-lock) for more information.

### Customization

**iOS**
* Change default values in the customiseTheme method in [`src/services/auth0.js`](https://github.com/futurice/pepperoni-app-kit/blob/e57bdac1cab657b25fb636cd31e4f630056dc95b/src/services/auth0.js)
* If you want to add images, copy them in the root `images` folder and add them via Xcode > file > add files to the project in 3 different resolutions (needs to be original and x2 and x3 versions)
* All changeable values can be retrieved [here]( https://auth0.com/docs/libraries/lock-ios/customization)

**Android**

* Change default values for the AppTheme.Lock in  `android/app/src/main/res/values/styles.xml`
* Add images in `android/app/src/main/res/mipmap-<hdpi|mdpi|xhdpi|xxhdpi>` in 4 different resolutions
* All changeable values can be retrieved [here]( https://github.com/auth0/Lock.Android/blob/master/lock/src/main/res/values/styles.xml)

## Example

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
