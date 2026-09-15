export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
  overrides: [
    {
      files: ['server/assets/emails/**/*.vue'],
      rules: {
        'no-invalid-position-declaration': null,
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
