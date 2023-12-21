<script setup>
const { login, email, password, remember } = useSynco()

</script>
<template>
  <section class="synco-login vh-100 ">
    <div class="container-fluid">
      <div class="row vh-100 align-items-center">
        <div class="col-sm-6 bg-synco-login  vh-100"></div>
        <div class="col-sm-6">
          <form class="px-sm-5 mx-sm-5" @submit.prevent="login">
            <div class="text-center">
              <img src="@/src/assets/sss-logo-primary.png" alt="SSS Logo">
              <h1>Welcome Back</h1>
              <p>Seize the day and make it extraordinary!</p>
            </div>
            <div class="pt-2 pb-5">
              <div class="mb-4">
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" id="email" class="form-control form-control-lg rounded-4"
                  placeholder="Enter email" v-model="email">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" name="password" id="password" class="form-control form-control-lg rounded-4"
                  placeholder="Enter password" v-model="password">
              </div>
              <div class="mb-3 d-flex align-items-center justify-content-between">
                <div class="form-check my-2">
                  <input type="checkbox" class="form-check-input" id="Remember me" v-model="remember">
                  <label class="form-check-label" for="Remember me">Remember me</label>
                </div>
                <NuxtLink to="/synco/forgot-password" class="text-muted">Forgot Password</NuxtLink>
              </div>
              <div class="mt-5 mb-4">
                <button type="submit" class="btn btn-primary btn-lg rounded-4 text-light py-3 w-100"><span
                    class="text-light">Log
                    In</span></button>
              </div>
              <div class="text-center">
                <img src="@/src/assets/sss-logo-synco-black.png" alt="SSS Synco Logo">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/synco/synco.scss';

.bg-synco-login {
  background-image: url('@/src/assets/bg-synco-login.png');
  background-repeat: no-repeat;
  background-size: cover;
  // background-size: 50% auto;
}

// .btn-synco-login {
//   background-color: #237FEA;
// }
</style>