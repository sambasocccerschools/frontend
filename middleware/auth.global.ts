// middleware/auth.ts

import { useStore } from '~/stores'

export default defineNuxtRouteMiddleware((to) => {
  const store = useStore()
  const token = useCookie('token')

  const authenticated = !!token.value || store.authenticated
  if (token.value) {
    store.updateAuthenticated(authenticated)
  }

  if (!authenticated && to?.path.includes('/synco/')) {
    return navigateTo('/synco')
  }

  if (authenticated && to?.path === '/synco') {
    return navigateTo('/synco/dashboard')
  }
})
