module.exports = (path, patterns) =>
  Object.entries(patterns).map(([pattern, template]) => ({
    type: 'modify',
    path,
    pattern: new RegExp(pattern, 'gi'),
    template,
  }));
