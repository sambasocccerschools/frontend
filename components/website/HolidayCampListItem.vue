<template>
  <div class="card rounded-4 mb-3 p-2">
    <div
      class="rounded-4 bg-primary text-light d-flex align-items-center justify-content-between px-3 pb-3 pt-2"
    >
      <div class="d-flex align-items-end">
        <span class="h4 m-0 p-0">
          <Icon name="majesticons:map-marker" class="me-2" />
        </span>
        Chelsea Academy, Lots Road, London, SW10 0AB
      </div>
    </div>
    <div
      class="card-body rounded-4 d-flex align-items-start text-muted mt-3 px-4"
      style="background: #f6f6f7"
    >
      <div class="border-end border-muted border-1 d-flex flex-column pe-3">
        <span class="h6"><strong>[Chelsea] Chelsea Academy</strong></span>
        <small>Summer Football Camp (3 miles)</small>
      </div>
      <div class="border-end border-muted border-1 d-flex flex-column px-3">
        <span class="h6"><strong>9 AM-1 PM</strong></span>
        <small>4-12 Years</small>
      </div>
      <div class="border-end border-muted border-1 d-flex flex-column px-3">
        <span class="h6"><strong>Summer Camp</strong></span>
        <small>Mon 24th Jul 2023 - Thu 27th Jul 2023</small>
      </div>
      <div class="d-flex align-items-start ps-3">
        <div class="d-flex flex-column me-3">
          <span class="h6"><strong>Price:</strong> £120 per child</span>
          <small>(Sibling discount available)</small>
        </div>
        <button class="btn btn-primary btn-sm rounded-3" @click="navigateTo">
          <strong>Book Holiday Camp</strong>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const router = useRouter()
const navigateTo = async () => {
  await router.push({ path: `/book/camp` })
}
</script>
