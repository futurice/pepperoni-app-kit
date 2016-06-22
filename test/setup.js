require('babel-register')({
  // ignore node_modules except node_modules/react-native-gifted-spinner and node_modules/react-native-lock
  // because they need to be transpiled
  // syntax: /node_modules\/(?!(library1|library2))/
  ignore: /node_modules\/(?!(react-native-gifted-spinner|react-native-lock))/
});
