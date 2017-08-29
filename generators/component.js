const createView = require('./utils/createView');
const findAndReplace = require('./utils/findAndReplace');

const bodyless = {
  ['## Render body ##']: 'null',

  ['.*## .* ##\n']: '',
};

const stateful = {
  ['## Imports ##']: `import { View, Switch } from 'react-native';`,

  ['## Class body ##']: `// Initial state
  state = { value: false };

  onValueChange = value => this.setState({ value });\n`,

  [' ## Render body ##']: `\n    <View>
      <Switch onValueChange={this.onValueChange} value={this.state.value} />
    </View>`,
};

const stateless = {
  ['## Imports ##']: `import { View, Text } from 'react-native';`,

  ['.*## Class body ##\n']: '',

  [' ## Render body ##']: `\n    <View>
      <Text>Hello world, I'm {{ properCase name }}!</Text>
    </View>`,
};

module.exports = {
  description: 'Generates new React component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name (Casing will be modified)',
      validate: value => (/.+/.test(value) ? true : 'A name is required.'),
    },
    {
      type: 'confirm',
      name: 'body',
      message: 'Create a sample component body?',
    },
    {
      type: 'checkbox',
      name: 'options',
      when: answers => answers.body,
      message: 'Additional options',
      choices: [
        {
          name: 'Create a stateful component?',
          value: 'stateful',
          checked: true,
        },
        {
          name:
            'Create a sample view showcasing your component? (you will be able to preview it instantly)',
          value: 'view',
          checked: true,
        },
      ],
    },
  ],
  actions: answers => {
    let actions = [
      {
        type: 'add',
        path: 'src/components/{{ properCase name }}.js',
        templateFile: 'generators/templates/Component.js.hbs',
      },
    ];

    if (!answers.body || !answers.options.includes('view')) {
      console.log(
        'NOTE: You need to import and use your component somewhere in order to see it in action!',
      );
    }

    // User does not want a sample component body, remove any template tags and
    // return null from render method to make result valid JS:
    if (!answers.body) {
      return actions.concat(
        findAndReplace('src/components/{{ properCase name }}.js', bodyless),
      );
    }

    actions = actions.concat(
      findAndReplace(
        'src/components/{{ properCase name }}.js',
        answers.options.includes('stateful') ? stateful : stateless,
      ),
    );

    if (answers.options.includes('view')) {
      actions = actions.concat(
        createView('generators/templates/ComponentContainerView.js.hbs'),
      );
    }

    return actions;
  },
};
