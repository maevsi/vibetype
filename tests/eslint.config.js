// @ts-check
import { defineConfig } from 'eslint/config'
import eslint from '@eslint/js'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  prettierRecommended,
  {
    rules: {
      'no-console': 'error',
    },
  },
)
