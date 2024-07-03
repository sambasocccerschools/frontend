// stores/index.ts

import type { IUser } from '~/types'
import { defineStore } from 'pinia'
import { syncoStore } from './synco'
import { parentsStore } from './parents'
import { websiteStore } from './website'

export const generalStore = defineStore('store', {
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
