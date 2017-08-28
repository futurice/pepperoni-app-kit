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
        'Create container as a view? (= automatically added as a tab in TabNavigator)',
    },
  ],
  actions: data => {
    const actions = [];

    const path = data.view
      ? 'src/containers/views/{{ properCase name }}.js'
      : 'src/containers/{{ properCase name }}.js';
    const templateFile = 'generators/templates/Container.js.hbs';

    // Generate the container file
    actions.push({
      type: 'add',
      path: path,
      templateFile,
    });

    // If generating view, set up container in src/containers/Navigator.js
    if (data.view) {
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
    }

    // Generate actions, action creators & reducer
    actions.push({
      type: 'add',
      path: 'src/state/{{ camelCase name }}.js',
      templateFile: 'generators/templates/Reducer.js.hbs',
    });

    // Set up reducer in src/redux/reducer.js
    actions.push(
      {
        type: 'modify',
        path: 'src/redux/reducer.js',
        pattern: /\/\/ ## Reducer Imports ##/gi,
        template:
          "// ## Reducer Imports ##\nimport {{ properCase name }}StateReducer from '../state/{{ camelCase name }}';",
      },
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
