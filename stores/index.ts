// stores/index.ts

import type { IUser } from '~/types'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    authenticated: false,
    user: undefined as IUser | undefined,
  }),
  getters: {},
  actions: {
    updateAuthenticated(authenticated: boolean) {
      this.authenticated = authenticated
    },
    setUser(user?: IUser) {
      this.user = user
    },
  },
  persist: true,
})
