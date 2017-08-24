module.exports = {
  description: 'Generates new Redux connected module',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Module name (Casing will be modified)',
    },
    {
      type: 'confirm',
      name: 'view',
      message:
        'Create module as a view? (= automatically added as a tab in TabNavigator)',
    },
  ],
  actions: data => {
    const actions = [];

    const modulePath = data.view
      ? 'src/modules/views/{{ properCase name }}.js'
      : 'src/modules/{{ properCase name }}.js';

    // Generate the module file
    actions.push({
      type: 'add',
      path: modulePath,
      templateFile: 'generators/templates/Module.js.hbs',
    });

    // If generating view, set up module in src/modules/Navigator.js
    if (data.view) {
      actions.push(
        {
          type: 'modify',
          path: 'src/redux/reducer.js',
          pattern: /\/\/ ## View Imports ##/gi,
          template:
            "// ## View Imports ##\nimport {{ properCase name }}View from './views/{{ properCase name }}';",
        },
        {
          type: 'modify',
          path: 'src/modules/Navigator.js',
          pattern: /\/\/ ## TabNavigator Views ##/gi,
          template:
            '// ## TabNavigator Views ##\n  {{ properCase name }}: { screen: {{ properCase name }}View },',
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
