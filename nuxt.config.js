export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'complete-nuxt-js-2-4-create-nuxt-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: '/socket.io/socket.io.js' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/sass/style.scss',    
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // '~/plugins/socket.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-socket-io',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {

      'Open+Sans': {
        wght: [300, 400, 500, 600, 700],

      },
    }
  },


  io: {
    // module options
    sockets: [{
      url: 'https://virtual-visite-oskawa.herokuapp.com'
    }]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  router: {
    linkExactActiveClass: 'active',
    // middleware: ["mw_cookie"]
  }

}
