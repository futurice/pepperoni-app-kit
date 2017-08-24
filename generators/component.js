module.exports = {
  description: 'Generates new React component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name (Casing will be modified)',
    },
  ],
  actions: data => {
    const actions = [];

    const modulePath = 'src/components/{{ properCase name }}.js';

    // Generate the module file
    actions.push({
      type: 'add',
      path: modulePath,
      templateFile: 'generators/templates/Component.js.hbs',
    });

    return actions;
  },
};
