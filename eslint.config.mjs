import pluginJs from "@eslint/js";
import nextPlugin from '@next/eslint-plugin-next';
import stylisticJsx from '@stylistic/eslint-plugin-jsx';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      '@stylistic/jsx': stylisticJsx,
      '@stylistic/ts': stylisticTs,
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      'react/react-in-jsx-scope': 'off',
      "@typescript-eslint/no-explicit-any": "off",
      "@stylistic/jsx/jsx-indent": ["error", 2],
      '@stylistic/ts/indent': ['error', 2],
    },
    settings: { react: { version: "detect" } },
  },
  {
    ignores: [
      'postcss.config.js',
      'next.config.js',
      'out/**',
      '.next/**'
    ],
  }
];