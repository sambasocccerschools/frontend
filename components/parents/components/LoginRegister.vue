<template>
  <div class="card rounded-4 p-4">
    <div class="d-flex flex-column">
      <template v-if="type == 'login'">
        <h3>Login</h3>
        <div class="form-group my-2">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="form-group my-2">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" />
        </div>
        <button class="btn btn-primary my-2">Login</button>
        <button
          class="btn btn-outlined-primary my-2"
          @click="type = 'register'"
        >
          Register
        </button>
      </template>
      <template v-if="type == 'register'">
        <h3>Register</h3>
        <div class="form-group my-2">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="form-group my-2">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" />
        </div>
        <div class="form-group my-2">
          <label for="repeat-password">Repeat Password</label>
          <input type="password" class="form-control" id="repeat-password" />
        </div>
        <button class="btn btn-primary my-2">Create Account</button>
        <button class="btn btn-outlined-primary my-2" @click="type = 'login'">
          Login
        </button>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'

let type = ref<string>('login')
</script>
