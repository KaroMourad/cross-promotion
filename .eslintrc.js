module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.VUE_APP_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.VUE_APP_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': 'off'
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
};
