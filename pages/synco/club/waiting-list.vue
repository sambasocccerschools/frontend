<script>
export default {
  data: () => ({
    // Will be replaced by array
    waiting: 8
  })
}
</script>

<template>
  <NuxtLayout name="syncolayout" pageTitle="Club Waiting List">

    <div class="row">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem name="Total on wait list" value="457" change="+12" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Average time on list" value="2 months" change="+12" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Level of interest" value="review new type of" change=""
            icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Most demanded team" value="4-7 Years Acton" change="+12"
            icon="ph:users-three" />
        </div>

        <table class="table table-hover border rounded-4 mt-4">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">
                <label class="form-check-label text-muted" for="all-table">
                  Name
                </label>
              </th>
              <th class="text-muted" scope="col">Age</th>
              <th class="text-muted" scope="col">Venue</th>
              <th class="text-muted" scope="col">Date of booking</th>
              <th class="text-muted" scope="col">Who booked?</th>
              <th class="text-muted" scope="col">Position</th>
              <th class="text-muted" scope="col">Level of interest</th>
            </tr>
          </thead>
          <tbody>
            <SyncoClubWaitingTableItem v-for="item in waiting" />
          </tbody>
        </table>

      </div>
      <div class="col">
        <SyncoClubFormsFindWaiting />
      </div>
    </div>

  </NuxtLayout>
</template>