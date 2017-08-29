const createView = require('./utils/createView');

module.exports = {
  description: 'Generates new Redux-connected container component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Container name (Casing will be modified)',
    },
    {
      type: 'confirm',
      name: 'view',
      message:
        'Create container as a view? (automatically added as a tab in TabNavigator)',
    },
  ],
  actions: data => {
    let actions = [];
    const templateFile = 'generators/templates/Container.js.hbs';

    if (data.view) {
      actions = actions.concat(createView(templateFile));
    } else {
      // Generate the container module
      actions.push({
        type: 'add',
        path: 'src/containers/{{ properCase name }}.js',
        templateFile,
      });

      console.log(
        'NOTE: You need to import and use your container component somewhere in order to see it in action!',
      );
    }

    // Generate actions, action creators & reducer
    actions.push({
      type: 'add',
      path: 'src/state/{{ camelCase name }}.js',
      templateFile: 'generators/templates/Reducer.js.hbs',
    });

    // Set up reducer in src/redux/reducer.js
    actions.push(
      // Import
      {
        type: 'modify',
        path: 'src/redux/reducer.js',
        pattern: /\/\/ ## Reducer Imports ##/gi,
        template:
          "// ## Reducer Imports ##\nimport {{ properCase name }}StateReducer from '../state/{{ camelCase name }}';",
      },
      // Inject reducer
      {
        type: 'modify',
        path: 'src/redux/reducer.js',
        pattern: /\/\/ ## Reducers ##/gi,
        template:
          '// ## Reducers ##\n\n  // {{ properCase name }} state\n  {{ camelCase name }}: {{ properCase name }}StateReducer,',
      },
    );

    return actions;
  },
};
