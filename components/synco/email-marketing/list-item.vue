<script>
export default {
  props: [
    'view', // card or list
  ],
}
</script>
<template>
  <div v-if="view === 'list'" class="card rounded-5 mb-4 border">
    <div
      class="card-body d-flex align-items-center justify-content-start px-5 py-4"
    >
      <div class="col-sm-3 d-flex flex-column">
        <span class="h4">Campaign Title</span>
        Sent 23/06/2023
      </div>
      <div class="d-flex col-auto">
        <div class="d-flex flex-column px-3">
          <span class="h4">Status</span>
          Active
        </div>
        <div class="d-flex flex-column px-3">
          <span class="h4">Recipients</span>
          10
        </div>
        <div class="d-flex flex-column px-3">
          <span class="h4">Agent</span>
          Ben Marcus
        </div>
        <div class="d-flex flex-column px-3">
          <span class="h4">Opens</span>
          2 miles
        </div>
        <div class="d-flex flex-column px-3">
          <span class="h4">Clicks</span>
          23
        </div>
      </div>
      <NuxtLink
        to="/synco/email-marketing/campaign/1"
        class="btn btn-primary text-light ms-auto"
        >View Report</NuxtLink
      >
    </div>
  </div>

  <!-- Card  -->
  <div v-if="view === 'card'" class="col">
    <div class="card rounded-4 mb-4 border">
      <div class="card-header border-bottom bg-transparent pt-3">
        <h4 class="card-title">Campaign Title</h4>
      </div>
      <div class="card-body row row-cols-3 gy-3">
        <div class="d-flex flex-column">
          <span class="h6">Opens</span>
          2 miles
        </div>

        <div class="d-flex flex-column">
          <span class="h6">Clicks</span>
          23
        </div>
        <div class="d-flex flex-column">
          <span class="h6">Agent</span>
          Ben Marcus
        </div>
        <div class="d-flex flex-column">
          <span class="h6">Recipients</span>
          230
        </div>
        <div class="d-flex flex-column">
          <span class="h6">Status</span>
          Active
        </div>
      </div>
      <div class="card-footer d-flex pb-3">
        <NuxtLink
          to="/synco/email-marketing/campaign/1"
          class="btn btn-primary text-light w-100 ms-2"
          >View Report
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
