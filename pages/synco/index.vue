<template>
  <section class="synco-login vh-100">
    <div class="container-fluid">
      <div class="row vh-100 align-items-center">
        <div class="col-sm-6 bg-synco-login vh-100"></div>
        <div class="col-sm-6">
          <div class="px-sm-5 mx-sm-5">
            <div class="text-center">
              <img src="@/src/assets/sss-logo-primary.png" alt="SSS Logo" />
              <h1>Welcome Back</h1>
              <p>Seize the day and make it extraordinary!</p>
            </div>
            <form class="pb-5 pt-2" @submit.prevent="login">
              <div class="mb-4">
                <label for="email" class="form-label">Email</label>
                <input
                  id="email"
                  v-model="email"
                  :disabled="isLogging"
                  type="email"
                  name="email"
                  class="form-control form-control-lg rounded-4"
                  placeholder="Enter email"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  id="password"
                  v-model="password"
                  :disabled="isLogging"
                  type="password"
                  name="password"
                  class="form-control form-control-lg rounded-4"
                  placeholder="Enter password"
                />
              </div>
              <div
                class="d-flex align-items-center justify-content-between mb-3"
              >
                <div class="form-check my-2">
                  <input
                    id="Remember me"
                    v-model="remember"
                    type="checkbox"
                    class="form-check-input"
                    :disabled="isLogging"
                  />
                  <label class="form-check-label" for="Remember me"
                    >Remember me</label
                  >
                </div>
                <NuxtLink to="/synco/reset-password" class="text-muted"
                  >Forgot Password</NuxtLink
                >
              </div>
              <div class="mb-4 mt-5">
                <button
                  type="submit"
                  class="btn btn-primary btn-lg rounded-4 text-light w-100 py-3"
                >
                  <span
                    v-if="isLogging"
                    class="spinner-border text-primary spinner-border-sm"
                    role="status"
                  ></span>
                  <span v-else class="text-light">Log In</span>
                </button>
              </div>
              <div class="text-center">
                <img
                  src="@/src/assets/sss-logo-synco-black.png"
                  alt="SSS Synco Logo"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useToast } from 'vue-toast-notification'
import { generalStore } from '~/stores'
import type { ILoginInput } from '~/types'

const { $api } = useNuxtApp()
const toast = useToast()
const store = generalStore()
const token = useCookie('token')
const email = ref('')
const password = ref('')
const remember = ref(false)
const isLogging = ref(false)

const login = async () => {
  try {
    isLogging.value = true

    if (!email.value || !password.value) {
      toast.error('Email and password are required.')
      return
    }

    const credentials: ILoginInput = {
      email: email.value,
      password: password.value,
      remember: remember.value,
    }
    const loginResponse = await $api.auth.login(credentials)

    token.value = loginResponse.data.access_token

    if (!token.value) {
      throw new Error('No token provided')
    }

    const profileResponse = await $api.profile.getProfile(token.value)

    store.setUser(profileResponse?.data || {})
    store.updateAuthenticated(true)

    // Call fetchAllData to fetch all miscellaneous data
    await store.fetchAllData()

    // Fetch all data for weekly classes
    await store.getAvailableVenues('weekly-classes')
    await store.getAbilityGroups('weekly-classes')

    await navigateTo({
      path: '/synco/dashboard',
    })
  } catch (error: any) {
    toast.error(
      error?.message || 'Something went wrong. Please try again later.',
    )
  } finally {
    isLogging.value = false
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/synco/synco.scss';

.bg-synco-login {
  background-image: url('@/src/assets/bg-synco-login.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
