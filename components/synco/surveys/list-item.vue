<script>
export default {
  props: [
    'view' //card or list
  ]
}
</script>
<template>
  <div class="card rounded-5 border mb-4" v-if="view === 'list'">
    <div class="card-body py-4 px-5 d-flex align-items-center justify-content-start">
      <div class="col-sm-3 d-flex flex-column">
        <span class="h4">Survey Title</span>
        Sent 23/06/2023
      </div>
      <div class="col-auto d-flex">
        <div class="d-flex flex-column px-3">
          <span class="h4">Status</span>
          Active
        </div>
        <div class="d-flex flex-column px-3">
          <span class="h4">Questions</span>
          10
        </div>
        <div class="d-flex flex-column px-3">
          <span class="h4">Recipients</span>
          230
        </div>
        <div class="d-flex flex-column px-3">
          <span class="h4">Agent</span>
          Ben Marcus
        </div>
      </div>
      <div class="col d-flex ps-5">
        <div class="d-flex flex-column px-2">
          <span class="h4">Opens</span>
          2 miles
        </div>
        <div class="d-flex flex-column px-2">
          <span class="h4">Clicks</span>
          23
        </div>
      </div>
      <NuxtLink to="/synco/surveys/report/1" class="btn btn-primary text-light ms-auto">View Report</NuxtLink>
    </div>
  </div>

  <!-- Card  -->
  <div class="col" v-if="view === 'card'">
    <div class="card rounded-4 border mb-4">
      <div class="card-header bg-transparent pt-3 border-bottom">
        <h4 class="card-title">Survey Title</h4>
      </div>
      <div class="card-body row row-cols-3 gy-3">
        <div class="d-flex flex-column ">
          <span class="h6">Status</span>
          Active
        </div>
        <div class="d-flex flex-column ">
          <span class="h6">Questions</span>
          10
        </div>
        <div class="d-flex flex-column ">
          <span class="h6">Recipients</span>
          230
        </div>
        <div class="d-flex flex-column ">
          <span class="h6">Agent</span>
          Ben Marcus
        </div>
        <div class="d-flex flex-column ">
          <span class="h6">Opens</span>
          2 miles
        </div>
        <div class="d-flex flex-column ">
          <span class="h6">Clicks</span>
          23
        </div>

      </div>
      <div class="card-footer d-flex pb-3">
        <NuxtLink to="/synco/surveys/report/1" class="btn btn-outline-dark me-2 w-100">Edit Report</NuxtLink>
        <NuxtLink to="/synco/surveys/report/1" class="btn btn-primary text-light  ms-2 w-100">View Report</NuxtLink>
      </div>
    </div>
  </div>
</template>