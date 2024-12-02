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
    'nuxt-tiptap-editor',
    '@ant-design-vue/nuxt',
  ],
  dayjs: {
    plugins: ['relativeTime', 'customParseFormat'],
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || '',
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
  tiptap: {
    prefix: 'Tiptap',
  },
  antd: {},
})
