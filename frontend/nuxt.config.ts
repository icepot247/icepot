// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  generate:{
    nojekyll: true, //not working on this version
  },
  ssr: true, //server side rendered enabled //When true
  target: "static", // and static, nuxt generates a hybrid static site
  app: {
    baseURL: "",//"https://icepot247.github.io/icepot",
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'icePot',
      titleTemplate: '%s - icePot',
      meta: [{ name: 'description', content: 'icePot.xyz' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },
  site: {
    url: 'https://icepot247.github.io/icepot',
    identity: {
      type: 'Person',
    },
    twitter: '@qdnvubp',
  },

  typescript: {
    strict: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'dark',
  },

  modules: [
    'nuxt-icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtseo/module',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
    'nuxt-simple-sitemap',
    '@nuxtjs/tailwindcss',
  ],

  content: {
    highlight: {
      theme: 'dracula',
    },
  },
})
