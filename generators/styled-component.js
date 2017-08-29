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
        'Create a sample view showcasing your component? (you will be able to preview it instantly)',
    },
  ],
  actions: data => {
    let actions = [];

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
      actions = actions.concat(
        createView('generators/templates/ComponentContainerView.js.hbs'),
      );
    } else {
      console.log(
        'NOTE: You need to import and use your component somewhere in order to see it in action!',
      );
    }

    return actions;
  },
};
