const createView = require('./utils/createView');

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
    {
      type: 'confirm',
      name: 'view',
      message:
        'Create a sample view which uses your component? (you will be able to preview it instantly)',
    },
  ],
  actions: data => {
    const actions = [];
    const templateFile = data.state
      ? 'generators/templates/StatefulComponent.js.hbs'
      : 'generators/templates/Component.js.hbs';

    // Generate the component module
    actions.push({
      type: 'add',
      path: 'src/components/{{ properCase name }}.js',
      templateFile,
    });

    if (data.view) {
      createView(actions, 'generators/templates/ComponentContainerView.js.hbs');
    } else {
      console.log(
        'NOTE: You need to import and use your component somewhere in order to see it in action!',
      );
    }

    return actions;
  },
};
