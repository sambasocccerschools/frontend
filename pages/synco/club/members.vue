<script>
export default {
  data: () => ({
    // These will get replaces by arrays
    members: 10,
  }),
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Members">
    <div class="row">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem
            name="Total Students"
            value="3021"
            change="+12"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Monthly Revenue"
            value="£75,000"
            change="+12"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Av. Monthly Fee"
            value="£35.00"
            change="+100"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Av. Life Cycle"
            value="18 months"
            change="+12"
            icon="ph:users-three"
          />
        </div>

        <div>
          <SyncoDataOptions />
        </div>
        <table class="table-hover rounded-4 mt-4 table border">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">
                <input class="form-check-input" type="checkbox" disabled />
              </th>
              <th scope="col" class="text-muted">
                <label class="form-check-label text-muted" for="all-table">
                  Name
                </label>
              </th>
              <th class="text-muted" scope="col">Age</th>
              <th class="text-muted" scope="col">Team</th>
              <th class="text-muted" scope="col">Date of booking</th>
              <th class="text-muted" scope="col">Monthly Fee</th>
              <th class="text-muted" scope="col">Lifecycle of membership</th>
              <th class="text-muted" scope="col">Who booked?</th>
              <th class="text-muted" scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <LazySyncoClubMembersTableItem v-for="member in members" />
          </tbody>
        </table>
      </div>
      <div class="col">
        <SyncoClubFormsFindMember />
      </div>
    </div>
  </NuxtLayout>
</template>
