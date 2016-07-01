global.__DEV__ = true;
require('fetch-mock').greed = 'bad';
require('babel-register')({
  // ignore node_modules except node_modules/react-native-lock,
  // because it needs to be transpiled
  // syntax: /node_modules\/(?!(library1|library2))/
  ignore: /node_modules\/(?!(react-native-lock))/
});
