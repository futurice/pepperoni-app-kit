module.exports = function (plop) {

  /* TODO
  -----------
  ** __specs__ for module generator
  ** Additional prompt for stateless module generator
  ** Better way to append reducers ? If dev deletes the commented lines it won't work.
  ** Component generator
  ** Any way to get name inline ? Like ` plop module name `
  **/

  plop.setGenerator('module', {
    description: 'Generates new module with redux connection',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Module name (Casing will be modified)'
    }],
    actions: [
      {
        type: 'add',
        path: 'src/modules/{{camelCase name}}/{{properCase name}}State.js',
        templateFile: 'generators/module/ModuleState.js.hbs'
      },
      {
        type: 'add',
        path: 'src/modules/{{camelCase name}}/{{properCase name}}View.js',
        templateFile: 'generators/module/ModuleView.js.hbs'
      },
      {
        type: 'add',
        path: 'src/modules/{{camelCase name}}/{{properCase name}}ViewContainer.js',
        templateFile: 'generators/module/ModuleViewContainer.js.hbs'
      },
      {
        type: 'modify',
        path: 'src/redux/reducer.js',
        pattern: /\/\/ ## Generator Reducer Imports/gi,
        template: '// ## Generator Reducer Imports\r\nimport {{properCase name}}Reducer from \'../modules/{{camelCase name}}/{{properCase name}}State\';'
      },
      {
        type: 'modify',
        path: 'src/redux/reducer.js',
        pattern: /\/\/ ## Generator Reducers/gi,
        template: '// ## Generator Reducers\r\n  {{camelCase name}}: {{properCase name}}Reducer,'
      }
    ]
  });
}
