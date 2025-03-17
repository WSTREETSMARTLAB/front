// eslint.config.js – Финальная рабочая версия для ESLint 9+
import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                process: 'readonly'
            },
            parser: vueParser,
            sourceType: 'module'
        },
        plugins: {
            vue
        },
        rules: {
            'no-console': 'off',
            'no-debugger': 'off',
            'semi': ['error', 'always'],
            'indent': ['error', 4], // Отступы 4 пробела
            'quotes': ['error', 'single'],
            'comma-dangle': ['error', 'never'],
            'space-before-function-paren': ['error', 'never'],
            'vue/html-indent': ['error', 4],
            'vue/script-indent': ['error', 4, { 'baseIndent': 1 }],
            'vue/max-attributes-per-line': ['error', {
                singleline: 1,
                multiline: 1
            }]
        }
    }
];
