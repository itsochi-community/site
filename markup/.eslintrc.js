module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true
    },
    extends: 'eslint:recommended',
    rules: {
        indent: ['warn', 4],
        quotes: ['warn', 'single'],
        semi: ['error', 'always'],
        'no-console': 'off',
        'no-unused-vars': 'off'
    }
};
