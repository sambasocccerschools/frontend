// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // Don't prerender SSR Synco and Parents Platform 
  routeRules: {
    '/synco/**': { ssr: false },
    '/parents/**': { ssr: false }
  }
})
