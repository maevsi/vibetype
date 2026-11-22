export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
  overrides: [
    {
      files: ['app/emails/**/*.vue'],
      rules: {
        'no-invalid-position-declaration': null,
        // Outlook's Word engine shows elements hidden by `display: none` unless they carry its own property
        'property-no-unknown': [true, { ignoreProperties: ['mso-hide'] }],
      },
    },
  ],
  plugins: ['stylelint-no-unsupported-browser-features'],
  rules: {
    // Tailwind's `@apply` takes utility class names, unlike the CSS Mixins at-rule of the same name that the underlying syntax data describes.
    'at-rule-prelude-no-invalid': [true, { ignoreAtRules: ['apply'] }],
    'plugin/no-unsupported-browser-features': true,
  },
}
