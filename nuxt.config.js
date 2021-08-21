export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'yengec-casestudy',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/repositories.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  axios: {
    proxy: true, // Can be also an object with default options
  },

  proxy: {
    '/placeholderapi/': {
      target: 'https://jsonplaceholder.typicode.com/',
      pathRewrite: { '/placeholderapi/': '' },
    },
    '/catapi/': {
      target: 'https://api.thecatapi.com/v1/images/search',
      pathRewrite: { '/catapi/': '' },
      headers: { 'X-API-KEY': process.env.CATAPI_KEY },
    },
  },
  privateRuntimeConfig: {},
  publicRuntimeConfig: {},
}
