module.exports = (actions, templateFile) => {
  // Create the view module
  actions.push({
    type: 'add',
    path: 'src/containers/views/{{ properCase name }}.js',
    templateFile,
  });

  // Set up view as last tab in TabNavigator
  actions.push(
    // Import
    {
      type: 'modify',
      path: 'src/containers/navigator/Tabs.js',
      pattern: /\/\/ ## View Imports ##/gi,
      template:
        "// ## View Imports ##\nimport {{ properCase name }}View from '../views/{{ properCase name }}';",
    },
    // Inject tab
    {
      type: 'modify',
      path: 'src/containers/navigator/Tabs.js',
      pattern: /\/\/ ## End TabNavigator Views ##/gi,
      template:
        '{{ properCase name }}: { screen: {{ properCase name }}View },\n    // ## End TabNavigator Views ##',
    },
  );
};
