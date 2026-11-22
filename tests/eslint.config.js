// @ts-check
import { defineConfig } from 'eslint/config'
import eslint from '@eslint/js'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'

export default defineConfig(
  {
    ignores: ['e2e/report/**', 'e2e/results/**'],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  prettierRecommended,
  {
    rules: {
      'no-console': 'error',
    },
  },
)
