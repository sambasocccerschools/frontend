<template>
  <!-- Holiday Camps -->
  <div class="card rounded-4 mb-3 p-2">
    <div
      class="rounded-4 bg-secondary text-light d-flex align-items-center justify-content-between px-4 py-3"
    >
      <div class="d-flex flex-row align-items-center">
        <slot name="title"></slot>
      </div>
      <div class="d-flex gap-3">
        <button class="btn btn-light btn-sm">
          <span class="d-flex flex-row align-items-center"><Icon name="ph:star" /> <span class="mx-2">396</span></span>
        </button>
        <slot name="status"></slot>
      </div>
    </div>
    <div
      class="card-body bg-muted rounded-4 d-flex flex-column align-items-start text-muted mt-2 px-4"
      style="background: #fcf9f6"
    >
      <div class="w-100 d-flex flex-row justify-content-between">
        <slot name="fields"></slot>
        <div class="d-flex flex-column px-3">
          <label>Booking Source</label>
          <span>Ben Marcus</span>
        </div>
        <div class="d-flex flex-column px-3 justify-content-center">
          <button type="button" class="btn rounded-circle"><Icon class="h3" name="ph:dots-three-vertical"/></button>
        </div>
      </div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
