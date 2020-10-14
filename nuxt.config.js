export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-color-mode-with-bulma',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        defer: true,
        src: 'https://use.fontawesome.com/releases/v5.3.1/js/all.js'
      }
    ]
  },

  router: {
    /*
     ** When a sidebar <nuxt-link></nuxt-link> is clicked,
     ** this will trigger the "is-active" class of Bulma
     */
    linkExactActiveClass: 'is-active'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/scss/main.scss'
  ],

  /*
   ** So we can use our .scss file globally in the Nuxt app
   */
  styleResources: {
    scss: ['~assets/scss/main.scss']
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // Doc: https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // Doc: https://github.com/nuxt-community/style-resources-module/
    // Used with styleResources{}
    '@nuxtjs/style-resources',
    // Doc: https://github.com/Developmint/nuxt-svg-loader
    // So we can load SVG icons as Vue components
    'nuxt-svg-loader'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
