// module.exports = {
//     env: {
//         browser: true,
//         es2021: true,
//         node: true,
//         // amd: true,
//     },
//     /* , 'airbnb' */
//     extends: ['plugin:react/recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended'],
//     parser: '@typescript-eslint/parser',
//     parserOptions: {
//         ecmaFeatures: {
//             jsx: true,
//         },
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//     },
//     settings: {
//         react: {
//             version: 'detect',
//         },
//         'import/resolver': {
//             node: {
//                 paths: ['src'],
//                 extensions: ['.js', '.jsx', '.ts', '.tsx'],
//             },
//         },
//     },
//     plugins: ['react', '@typescript-eslint'],
//     // plugins: ['simple-import-sort', 'prettier'],
//     rules: {
//         // 'prettier/prettier': [
//         //     'error',
//         //     // {
//         //     //     trailingComma: 'es5',
//         //     //     singleQuote: true,
//         //     // },
//         // ],
//         'prettier/prettier': ['error', {}, { usePrettierrc: true }],
//         'react/react-in-jsx-scope': 'off',
//         'jsx-a11y/accessible-emoji': 'off',
//         'react/prop-types': 'off',
//         '@typescript-eslint/explicit-function-return-type': 'off',
//         // 'simple-import-sort/imports': 'error',
//         // 'simple-import-sort/exports': 'error',
//         'jsx-a11y/anchor-is-valid': [
//             'error',
//             {
//                 components: ['Link'],
//                 specialLink: ['hrefLeft', 'hrefRight'],
//                 aspects: ['invalidHref', 'preferButton'],
//             },
//         ],
//     },
// };

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react/recommended',
        // 'airbnb',
        'standard',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'plugin:react-hooks/recommended',
    ],
    plugins: ['@typescript-eslint', 'react', 'simple-import-sort', 'prettier'],
    env: {
        browser: true,
        es2021: true,
        node: true,
        amd: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/accessible-emoji': 'off',
        'react/prop-types': 'off',
        'jsx-a11y/anchor-is-valid': [
            'warn',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton'],
            },
        ],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.tsx', '.ts'] },
        ],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        // 'multiline-ternary': ['error', 'never'],
    },
};
