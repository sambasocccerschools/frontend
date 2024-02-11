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
                  />
                  <label class="form-check-label" for="Remember me"
                    >Remember me</label
                  >
                </div>
                <NuxtLink to="/synco/forgot-password" class="text-muted"
                  >Forgot Password</NuxtLink
                >
              </div>
              <div class="mb-4 mt-5">
                <button
                  type="submit"
                  class="btn btn-primary btn-lg rounded-4 text-light w-100 py-3"
                >
                  <span class="text-light">Log In</span>
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
import { useStore } from '~/stores'

const config = useRuntimeConfig()
const router = useRouter()
const store = useStore()
const token = useCookie('token')
const email = ref('synco@samba.com')
const password = ref('password')
const remember = ref(false)

const login = async () => {
  const { data, error }: any = await useFetch(
    config.public.API_BASE_URL + '/v1/auth/login',
    {
      method: 'POST',
      body: {
        email,
        password,
        remember,
      },
    },
  )
  if (data.value) {
    console.log(data.value, 'data')
    router.push('/synco/dashboard')
    store.authenticated = true
    token.value = data?.value?.access_token
  }
  if (error.value) {
    console.log(error.value, 'data')
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
