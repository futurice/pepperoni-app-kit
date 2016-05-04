var fs = require('fs');
var path = require('path');
var babel = require('babel-core');
var origJs = require.extensions['.js'];

require.extensions['.js'] = function mochaJSRequireOverride(module, fileName) {
  var output;
  var mockedFileName = fileName;
  if (fileName.indexOf('node_modules/react-native/Libraries/react-native/react-native.js') >= 0) {
    mockedFileName = path.resolve('./test/mocks/react-native.js');
  }
  if (fileName.indexOf('node_modules/') >= 0) {
    return (origJs || require.extensions['.js'])(module, mockedFileName);
  }
  var src = fs.readFileSync(mockedFileName, 'utf8');
  output = babel.transform(src, {
    filename: mockedFileName
  }).code;

  return module._compile(output, mockedFileName);
};
