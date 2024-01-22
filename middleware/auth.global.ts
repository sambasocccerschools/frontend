// middleware/auth.ts
import { useStore } from "~/store";

export default defineNuxtRouteMiddleware((to) => {
    const store = useStore();
    const token = useCookie('token');
  
    if (token.value) {
      // check if value exists
      store.authenticated = true;
    }
  
    // if token exists and url is /login redirect to homepage
    if (token.value && to?.path === '/synco') {
      return navigateTo('/');
    }
    if (!token.value && to?.path === '/synco/dashboard') {
      return navigateTo('/');
    }
  
    // if token doesn't exist redirect to log in
    // if (!token.value && to?.path !== '/pacientes/login') {
    //   abortNavigation();
    //   return navigateTo('/pacientes/login');
    // }
});
