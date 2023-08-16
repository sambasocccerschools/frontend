// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // css: ['~/assets/scss/main.scss']
  plugins: [
    {src: '~/plugins/bootstrap,js', mode: 'client'}
  ]
})
