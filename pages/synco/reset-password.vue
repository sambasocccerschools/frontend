<template>
  <section class="synco-login vh-100">
    <div class="container-fluid">
      <div class="row vh-100 align-items-center">
        <div class="col-sm-6 bg-synco-login vh-100"></div>
        <div class="col-sm-6">
          <div class="px-sm-5 mx-sm-5">
            <div class="text-center">
              <img src="@/src/assets/sss-logo-primary.png" alt="SSS Logo" />
              <h1>Reset Password</h1>
              <p>Enter a new password</p>
            </div>
            <form @submit.prevent="resetPassword" class="pt-2 pb-5">
              <div class="mb-4">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  v-model="email"
                  name="email"
                  id="email"
                  class="form-control form-control-lg rounded-4"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  v-model="password"
                  name="password"
                  id="password"
                  class="form-control form-control-lg rounded-4"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password Confirmation</label>
                <input
                  type="password"
                  v-model="password_confirmation"
                  name="password_confirmation"
                  id="password_confirmation"
                  class="form-control form-control-lg rounded-4"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div class="mt-5 mb-4">
                <button
                  type="submit"
                  class="btn btn-primary btn-lg rounded-4 text-light py-3 w-100"
                >
                  <span class="text-light">Reset Password</span>
                </button>
              </div>
              <div v-if="success" class="text-success">
                {{ success }}
              </div>
              <div v-if="errorText" class="text-danger">
                {{ errorText }}
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
const email = ref("test@samba.com");
const password = ref("");
const password_confirmation = ref("");
const token = useCookie("token");
const errorText = ref(null);
const success = ref(null);
const config = useRuntimeConfig();

const resetPassword = async () => {
  if(password.value !== password_confirmation.value) {
    return errorText.value = "Passwords must match.";
  }
  const { data, error } = await useFetch(
    config.public.API_BASE_URL + "/v1/auth/resetPassword?token=" + token.value,
    {
      method: "POST",
      body: {
        email,
        password,
        password_confirmation
      },
    }
  );
  if (data.value) {
    console.log(data.value, 'data');
    success.value = data.value.messages;
  }
  if(error.value.data.message) {
    console.log(error.value.data, 'error');
    errorText.value = error.value.data.message;
  } else if (error.value.data.messages) {
    errorText.value = error.value.data.messages;
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/synco/synco.scss";

.bg-synco-login {
  background-image: url("@/src/assets/bg-synco-login.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
