module.exports = (
  templateFile,
  navigatorName = 'TabNavigator',
  navigatorPath = 'src/containers/navigator/Tabs.js',
) => [
  // Create the view module
  {
    type: 'add',
    path: 'src/containers/views/{{ properCase name }}.js',
    templateFile,
  },

  /* Set up view as last tab in given navigator (TabNavigator by default) */

  // Import
  {
    type: 'modify',
    path: navigatorPath,
    pattern: /\/\/ ## View Imports ##/gi,
    template:
      "// ## View Imports ##\nimport {{ properCase name }}View from '../views/{{ properCase name }}';",
  },

  // Inject view
  {
    type: 'modify',
    path: navigatorPath,
    pattern: new RegExp(`// ## End ${navigatorName} Views ##`, 'gi'),
    template: `{{ properCase name }}: { screen: {{ properCase name }}View },\n    // ## End ${navigatorName} Views ##`,
  },
];
