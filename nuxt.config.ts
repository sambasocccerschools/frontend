// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    'dayjs-nuxt',
    '@samk-dev/nuxt-vcalendar',
    '@nuxt/image',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  dayjs: {
    plugins: ['relativeTime', 'customParseFormat'],
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
  // Don't prerender SSR Synco and Parents Platform
  routeRules: {
    '/**': { ssr: false }, // TODO:revisar
    '/synco/**': { ssr: false },
    '/parents/**': { ssr: false },
  },
  image: {
    inject: true,
    // dir: '/src/assets',
  },
  piniaPersistedstate: {
    storage: 'sessionStorage',
  },
})
