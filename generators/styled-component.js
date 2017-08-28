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
      // Generate the view container module
      actions.push({
        type: 'add',
        path: 'src/containers/views/{{ properCase name }}.js',
        templateFile: 'generators/templates/ComponentContainerView.js.hbs',
      });

      actions.push(
        {
          type: 'modify',
          path: 'src/containers/navigator/Tabs.js',
          pattern: /\/\/ ## View Imports ##/gi,
          template:
            "// ## View Imports ##\nimport {{ properCase name }}View from '../views/{{ properCase name }}';",
        },
        {
          type: 'modify',
          path: 'src/containers/navigator/Tabs.js',
          pattern: /\/\/ ## End TabNavigator Views ##/gi,
          template:
            '{{ properCase name }}: { screen: {{ properCase name }}View },\n    // ## End TabNavigator Views ##',
        },
      );
    } else {
      console.log(
        'NOTE: You need to import and use your component somewhere in order to see it in action!',
      );
    }

    return actions;
  },
};
