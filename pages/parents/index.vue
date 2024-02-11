<script setup lang="ts"></script>
<template>
  <section class="synco-login vh-100">
    <div class="container-fluid">
      <div class="row vh-100 align-items-center">
        <div class="col-sm-6 bg-parents-login vh-100"></div>
        <div class="col-sm-6">
          <div class="px-sm-5 mx-sm-5">
            <div class="text-center">
              <img src="@/src/assets/sss-logo-primary.png" alt="SSS Logo" />
              <h1>Welcome Back</h1>
              <p>Bookings made simple</p>
            </div>
            <form action="/parents/dashboard" class="pb-5 pt-2">
              <div class="mb-4">
                <label for="email" class="form-label">Email</label>
                <input
                  id="email"
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
                    type="checkbox"
                    class="form-check-input"
                  />
                  <label class="form-check-label" for="Remember me"
                    >Remember me</label
                  >
                </div>
                <NuxtLink to="/parents/forgot-password" class="text-muted"
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
                  src="@/src/assets/sss-logo-parents-blue.png"
                  alt="Samba Soccer Schools Parents Logo"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/parents/parents.scss';

.bg-parents-login {
  background-image: url('@/src/assets/bg-parents-login.png');
  background-repeat: no-repeat;
  background-size: cover;
  // background-size: 50% auto;
}

// .btn-synco-login {
//   background-color: #237FEA;
// }
</style>
