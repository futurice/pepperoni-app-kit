const createView = require('./utils/createView');

module.exports = {
  description:
    'Generates new React Native <View>, styled using styled-components',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name (Casing will be modified)',
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

    const path = 'src/components/{{ properCase name }}.js';
    const templateFile = 'generators/templates/StyledComponent.js.hbs';

    // Generate the module file
    actions.push({
      type: 'add',
      path,
      templateFile,
    });

    // If generating view, set up container in src/containers/Navigator.js
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
