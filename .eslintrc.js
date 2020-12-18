module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint-config-sumikko',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'eslint-config-sumikko/prettier',
    'prettier/vue'
  ],
  plugins: [],
  // add your custom rules here
  rules: {}
}
