<template>
  <section class="synco-login vh-100">
    <div class="container-fluid">
      <div class="row vh-100 align-items-center">
        <div class="col-sm-6 bg-synco-login vh-100"></div>
        <div class="col-sm-6">
          <div class="px-sm-5 mx-sm-5">
            <div class="text-center">
              <img src="@/src/assets/sss-logo-primary.png" alt="SSS Logo" />
              <h1>Did you forget your password?</h1>
              <p>Enter your email address</p>
            </div>
            <form class="pb-5 pt-2" @submit.prevent="forgotPassword">
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
              <div class="mb-4 mt-5">
                <button
                  type="submit"
                  class="btn btn-primary btn-lg rounded-4 text-light w-100 py-3"
                >
                  <span class="text-light">Reset Password</span>
                </button>
              </div>
              <div v-if="success" class="text-success">
                {{ success }}
              </div>
              <div v-if="error" class="text-danger">
                {{ error }}
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

<script setup>
const { $api } = useNuxtApp()
const email = ref('')
const error = ref(null)
const success = ref(null)

const forgotPassword = async () => {
  try {
    if (!email.value) {
      error.value = 'Email is required.'
      return
    }

    await $api.auth.forgetPassword(email.value)

    success.value = 'Password reset link has been sent to your email.'
  } catch (error) {
    console.log(error, 'error')
    error.value = 'An error occurred. Please try again.'
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
