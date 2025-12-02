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
    'plugin/no-unsupported-browser-features': true,
  },
}
