<script setup>
</script>

<template>
  <div class="d-flex bg-light">
    <SyncoNavigation />
    <div class="py-5 px-3 col">
      <div class="container">
        <div class="row mb-4">
          <div class="col">
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex flex-column">
                <h4>Hi Nilio!</h4>
                <h2>Welcome back 👋</h2>
              </div>

              <div class="d-flex align-items-center">
                <div class="d-flex gap-3">
                  <input type="text" class="form-control form-control-lg" placeholder="Search">
                  <button class="btn btn-light border rounded-5">Bell</button>
                </div>
                <div class="border-end border-1 border-muted d-flex flex-column align-items-end text-end px-4">
                  <span class="h5 m-0">January</span>
                  <small class="text-muted">8 Monday, 2023</small>
                </div>
                <div class="px-4 d-flex align-items-center">
                  <img src="@/src/assets/img-avatar-small.png" alt="Avatar" class="me-3">
                  <h5>Nilio Bagga
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

<style src="@/assets/styles/synco/synco.scss"/>