module.exports = {
  description: 'Generates new React Native <View> using styled-components',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name (Casing will be modified)',
    },
  ],
  actions: data => {
    const actions = [];

    const modulePath = 'src/components/styled/{{ properCase name }}.js';

    // Generate the module file
    actions.push({
      type: 'add',
      path: modulePath,
      templateFile: 'generators/templates/StyledComponent.js.hbs',
    });

    return actions;
  },
};
