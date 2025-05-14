import { defineNuxtPlugin } from '#app'
import { decodeToken } from '~/utils/decodeToken'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('decodeToken', decodeToken)
})
