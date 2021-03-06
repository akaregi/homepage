export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s - Okocraft',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Okocraft'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Okocraft is a Minecraft Server.'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Okocraft'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://okocraft.github.io'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Okocraft'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Okocraft is a Minecraft Server.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://i.imgur.com/aSRElLR.png'
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'ja_JP'
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'en_US'
      },

      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: '@okocraft'
      },
      {
        hid: 'twitter:creator',
        property: 'twitter:creator',
        content: '@okocraft'
      },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#da532c'
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#ffffff'
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "manifest",
        href: "/site.webmanifest"
      },
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#5bbad5"
      },
      {
        rel: 'dns-prefetch',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/'
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Noto+Serif+JP&display=swap&subset=japanese"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/fontawesome.ts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap'
  ],

  styleResources: {
    scss: [
      '@/assets/scss/_index.scss'
    ]
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    fallback: true
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'rules-top',
        path: '/rule',
        component: resolve(__dirname, 'pages/Rule.vue'),
        children: [
          {
            path: ':page',
            name: 'rule',
            component: resolve(__dirname, 'pages/Rule.vue'),
          },
        ],
      })
    }
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
    /*  [
        require('markdown-it-anchor'), {
          permalink: true,
          permalinkSymbol: '????',
          slugify: (s) => String(s).trim().toLowerCase().replace(/\s+/g, '-').replace(/([^\w\-]+)/g, ''),
        }
      ],
      require('markdown-it-emoji'),
      require('markdown-it-highlightjs') */
    ]
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://okocraft.github.io',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    routes: async () => {
      const { $content } = require('@nuxt/content')
      var posts = await $content('rule').only(['path']).fetch()
      return posts.map((p) => p.path)
    }
  }
}
