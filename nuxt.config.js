export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: ''
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Leishmaniasis Research | Laranjeira Lab',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: "description",
        name: "description",
        content:
          "Leishmaniasis Research | Laranjeira Lab"
      },
      //open graph
      {
        hid: "og:title",
        property: "og:title",
        content: "Leishmaniasis Research | Laranjeira Lab"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Leishmaniasis Research | Laranjeira Lab"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "felab.science"
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://felab.science"
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://res.cloudinary.com/dppi8hoxw/image/upload/v1634046923/Promastigota_proc%C3%ADclico_eqqhav.png"
      },
      {
        hid: "og:image:width",
        property: "og:image:width",
        content: 1280
      },
      {
        hid: "og:image:height",
        property: "og:image:height",
        content: 720
      },
      {
        hid: "og:image:type",
        property: "og:image:type",
        content: "image/png"
      },
      //twitter card
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary"
      },
      {
        hid: "twitter:url",
        property: "twitter:url",
        content: "https://felab.science"
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/robots",
    "@nuxtjs/sitemap"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    sitemap: {
      hostname: "https://moreamora.com.br",
      gzip: true
    }
  }
}
