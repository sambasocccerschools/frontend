import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'

export default defineNuxtPlugin((nuxtApp) => {
  const options = {
    position: 'top-right',
    duration: 3000,
  }
  nuxtApp.vueApp.use(ToastPlugin, options)
})
