import type { ModuleOptions } from '@nuxtjs/html-validator'

// shared with the end-to-end tests, which validate every server-rendered page
// with the same rules
export const HTML_VALIDATE_CONFIG = {
  elements: [
    'html5',
    {
      // reka-ui's checkboxes and radios are `<button>`s named by a
      // `<label for>`, which browsers honor but `text-content` ignores
      button: { textContent: 'default' },
    },
  ],
  // the module's defaults are not exported, so they are repeated here
  extends: [
    'html-validate:document',
    'html-validate:recommended',
    'html-validate:standard',
  ],
  rules: {
    'attribute-boolean-style': 'off',
    'doctype-style': 'off',
    // combobox-style widgets (e.g. `Select`) correctly point `aria-controls`
    // at a popup that only exists in the DOM once opened, which this rule
    // can't distinguish from an actually broken reference
    'no-missing-references': 'off',
    'no-inline-style': 'off',
    'no-trailing-whitespace': 'off',
    'no-unknown-elements': 'error',
    // reka-ui renders these widgets as ARIA-annotated elements by design
    'prefer-native-element': [
      'error',
      { exclude: ['checkbox', 'progressbar', 'radio'] },
    ],
    'require-sri': 'off',
    'svg-focusable': 'off',
    'void-style': 'off',
  },
} satisfies ModuleOptions['options']
