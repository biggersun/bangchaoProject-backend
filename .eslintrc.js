const eslintrc = {
    extends: [ 'eslint-config-airbnb', ],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 8,
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
    },
    plugins: [],
    rules: {
        indent: [ 'error', 4, ],
        'max-len': [ 'error', 120, ],
        'comma-dangle': [ 'error', 'always', ],
        semi: [ 'error', 'never', ],
        'array-bracket-spacing': [ 'error', 'always', ],
        'no-shadow': 'off',
        'react/jsx-indent': [ 'error', 4, ],
        'react/no-array-index-key': 'off',
        'react/require-default-props': 'off',
        'react/prefer-stateless-function': [ 'error', { ignorePureComponents: true, }, ],
        'react/jsx-indent-props': [ 'error', 4, ],
        'react/forbid-prop-types': [ 'error', { forbid: [ 'any', ], }, ],
        'jsx-a11y/no-static-element-interactions': 'off',
        'import/no-extraneous-dependencies': [ 'error', { devDependencies: [ '*.js', 'config/*.js', ], }, ],
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: 'config/webpack.config.dev.js',
            },
        },
    },
}

module.exports = eslintrc
