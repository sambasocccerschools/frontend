// middleware/auth.ts

import { generalStore } from '~/stores'

export default defineNuxtRouteMiddleware((to) => {
  const store = generalStore()
  const token = useCookie('token')

  const authenticated = !!token.value || store.authenticated
  if (token.value) {
    store.updateAuthenticated(authenticated)
  }

  if (
    !authenticated &&
    to?.path.includes('/synco/') &&
    to.path !== '/synco/forgot-password'
  ) {
    return navigateTo('/synco')
  }

  if (authenticated && to?.path === '/synco') {
    return navigateTo('/synco/dashboard')
  }
})
