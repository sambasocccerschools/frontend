<template>
  <NuxtLayout name="syncolayout" page-title="Trials Information">
    <div class="row">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem
            name="Total Free Trials"
            value="1920"
            change="+12"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Top Performer"
            value="Abdul Ali"
            change="456"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Free Trial Attendance"
            value="120"
            change="35"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Trials to Members"
            value="57"
            change="45"
            icon="ph:users-three"
          />
        </div>

        <div class="d-flex justify-content-end py-3">
          <SyncoFiltersAgentsDropdown />
        </div>

        <table class="table-hover rounded-4 table border">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">
                <input
                  id="all-table"
                  class="form-check-input"
                  type="checkbox"
                  value=""
                />
              </th>
              <th scope="col">
                <label class="form-check-label text-muted" for="all-table">
                  Name
                </label>
              </th>
              <th class="text-muted" scope="col">Age</th>
              <th class="text-muted" scope="col">Venue</th>
              <th class="text-muted" scope="col">Date of booking</th>
              <th class="text-muted" scope="col">Date of Trial</th>
              <th class="text-muted" scope="col">Source</th>
              <th class="text-muted" scope="col">Attempts</th>
              <th class="text-muted" scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <LazySyncoWeeklyClassesTrialsTableItem />
          </tbody>
        </table>
      </div>
      <div class="col">
        <SyncoWeeklyClassesFormsFindTrial />
      </div>
    </div>
  </NuxtLayout>
</template>
