<script lang="ts" setup>
const store = generalStore()

defineProps<{
  pageTitle: string
}>()

const userFullName = computed(() => {
  return store.user ? `${store.user.full_name}` : ''
})
</script>
<template>
  <div class="d-flex bg-light">
    <ParentsNavigation />
    <div class="col vh-100 overflow-y-scroll px-3 py-5">
      <div class="container-fluid">
        <div class="row mb-4">
          <div class="col">
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex flex-column">
                <h4>Hi John!</h4>
                <h2>{{ pageTitle || 'Welcome back 👋' }}</h2>
              </div>

              <div class="d-flex align-items-center">
                <div class="d-flex gap-3">
                  <NuxtLink
                    to="/"
                    class="btn btn-primary text-light rounded-4 border-0"
                    style="background-color: #00a6e3"
                  >
                    Go back to the website
                  </NuxtLink>
                  <button class="btn btn-light rounded-5 border bg-white">
                    <Icon
                      name="ic:outline-notifications-none"
                      class="h4 text-muuted m-0"
                    />
                  </button>
                </div>
                <div
                  class="border-end border-1 border-muted d-flex flex-column align-items-end px-4 text-end"
                >
                  <span class="h5 m-0">January</span>
                  <small class="text-muted">8 Monday, 2023</small>
                </div>
                <div class="d-flex align-items-center px-4">
                  <img
                    src="@/src/assets/img-avatar-small.png"
                    alt="Avatar"
                    class="me-3"
                  />
                  <h5>
                    {{ userFullName }}
                    <Icon name="bi:chevron-down" />
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/styles/parents/parents.scss" />
