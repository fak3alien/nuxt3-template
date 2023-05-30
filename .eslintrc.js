module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
    sourceType: 'module',
    createDefaultProgram: true,
  },

  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: ['prettier'],

  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    semi: ['error', 'always'],
    'no-extra-semi': ['error'],
    quotes: ['error', 'single', { avoidEscape: true }],

    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: 1,
      },
    ],

    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/v-on-event-hyphenation': ['error', 'always'],
    'vue/multi-word-component-names': 0,

    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'ignore', // ignore because conflicts with prettier
      },
    ],

    radix: ['error', 'always'],
    eqeqeq: 2,
    curly: 2,
    'no-debugger': [2],
    'no-console': 2,
    'no-prototype-builtins': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,

    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        ignoreVoid: true,
      },
    ],

    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-throw-literal': 'error',

    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],

    '@typescript-eslint/no-misused-new': 'error',

    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          properties: 'explicit',
          parameterProperties: 'explicit',
        },
      },
    ],

    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/await-thenable': 'error',

    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Foo: "Don't use Far because it is unsafe",

          String: {
            message: 'Use string instead',
            fixWith: 'string',
          },

          '{}': {
            message: 'Use object instead',
            fixWith: 'object',
          },
        },
      },
    ],

    '@typescript-eslint/prefer-readonly': [
      'error',
      {
        onlyInlineLambdas: false,
      },
    ],

    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'private-instance-field',
          'protected-instance-field',
          'public-instance-field',
          'constructor',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
        ],
      },
    ],

    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/consistent-type-assertions': 0,
    '@typescript-eslint/interface-name-prefix': 'off',

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        endOfLine: 'auto',
      },
    ],
  },
};
