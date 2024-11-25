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
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000',
    },
  },
  routeRules: {
    '/**': { ssr: false }, // TODO: Revisit this if SSR is needed globally
    '/synco/**': { ssr: false },
    '/parents/**': { ssr: false },
  },
  image: {
    inject: true,
  },
  piniaPersistedstate: {
    storage: 'sessionStorage',
  },
  tiptap: {
    prefix: 'Tiptap',
  },
  antd: {}, // Default configuration for Ant Design Vue
  vite: {
    build: {
      rollupOptions: {
        external: ['ant-design-vue'], // Mark ant-design-vue as external to fix Rollup errors
      },
    },
  },
});
