// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '~/assets/fontawesome/fontawesome.css',
    '~/assets/fontawesome/regular.css',
    '~/assets/fontawesome/solid.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: 'github-dark',
      preload: ['go', 'javascript', 'sql']
    },
  }
})
