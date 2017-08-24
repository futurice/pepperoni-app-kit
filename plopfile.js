const path = require('path');
const fs = require('fs');

const generators =
  fs.readdirSync(path.join(__dirname, 'generators'))
  .filter(filename => filename.match(/.*\.js$/))
  .map(filename => filename.match(/(.*)\.js$/)[1]);

module.exports = plop =>
  generators.forEach(generator =>
    plop.setGenerator(generator, require(`./generators/${generator}`)),
  );
