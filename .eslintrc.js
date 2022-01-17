module.exports = {
    extends: ['eslint-config-airbnb-base', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        'import/extensions': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'no-prototype-builtins': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                varsIgnorePattern: 'cases|test|_|R|error',
                args: 'none',
            },
        ],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'import/no-unresolved': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts'],
                moduleDirectory: ['node_modules', './src'],
            },
        },
    },
};
