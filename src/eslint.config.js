// @ts-check

// @ts-ignore
import { VIO_ESLINT_CONFIG } from '@dargmuesli/nuxt-vio/.config/lint.js'
import { POLYFILLS } from './node/static/index.ts'

import withNuxt from './.nuxt/eslint.config.mjs'
import 'eslint-plugin-only-error'

export default withNuxt(
  ...VIO_ESLINT_CONFIG,
  {
    settings: {
      polyfills: POLYFILLS,
      'vue-i18n': {
        localeDir: [
          {
            pattern: './i18n/locales/*.json',
          },
          {
            pattern: './node_modules/@dargmuesli/nuxt-vio/i18n/locales/*.json',
          },
        ],
      },
    },
  },
  {
    files: ['i18n/locales/**/*'],
    rules: {
      '@intlify/vue-i18n/no-duplicate-keys-in-locale': 'off',
    },
  }, // TODO: remove once `@intlify/vue-i18n/no-duplicate-keys-in-locale` is checked across layers
)
