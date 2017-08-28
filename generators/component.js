module.exports = {
  description: 'Generates new React component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name (Casing will be modified)',
    },
    {
      type: 'confirm',
      name: 'state',
      message: 'Create a stateful component?',
    },
  ],
  actions: data => {
    const actions = [];

    const path = 'src/components/{{ properCase name }}.js';
    const templateFile = data.state
      ? 'generators/templates/StatefulComponent.js.hbs'
      : 'generators/templates/Component.js.hbs';

    // Generate the module file
    actions.push({
      type: 'add',
      path,
      templateFile,
    });

    return actions;
  },
};
