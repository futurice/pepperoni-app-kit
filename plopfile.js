const path = require('path');
const fs = require('fs');

const generators =
  fs.readdirSync(path.join(__dirname, 'generators'))
  .filter(file => file.match(/.*\.js$/));

module.exports = plop =>
  generators.forEach(generator =>
    plop.setGenerator(generator, require(`./generators/${generator}`)),
  );
