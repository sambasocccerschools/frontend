<script>
export default {
  data: () => ({
    camps: 10,
  }),
}
</script>
<template>
  <NuxtLayout name="syncolayout" page-title="Holiday Camp Students">
    <div class="card bg-primary text-bg-dark">
      <div class="card-body">
        <span class="h3">
          <Icon name="ic:baseline-search" /> Find a Holiday Camp
        </span>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-sm-3">
        <SyncoHolidayCampsFormsFindCamp />
      </div>
      <div class="col">
        <SyncoHolidayCampsListItem v-for="camp in camps" />
      </div>
    </div>
  </NuxtLayout>
</template>
