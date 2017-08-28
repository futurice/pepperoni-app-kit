module.exports = {
  description:
    'Generates new React Native <View>, styled using styled-components',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name (Casing will be modified)',
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

    return actions;
  },
};
