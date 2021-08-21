import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'YENGEC - CASESTUDY',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/yengec.jpg' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

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
    '@nuxtjs/vuetify',
    '@nuxtjs/device',
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

  device: {
    refreshOnResize: true,
  },

  privateRuntimeConfig: {},
  publicRuntimeConfig: {},

  vuetify: {
    // customVariables: ['~/assets/css/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#804444',
          accent: '#ed9d92',
          secondary: '#77959f',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  loading: {
    color: 'green',
    height: '5px',
  },
}
