<template>
  <NuxtLayout name="syncolayout" page-title="Leads Database">
    <div class="row">
      <div class="col-sm-8">
        <div class="row mb-3">
          <div class="col">
            <ul class="nav nav-pills">
              <li class="nav-item rounded-3 me-2">
                <a class="nav-link active" aria-current="page" href="#"
                  >Facebook</a
                >
              </li>
              <li class="nav-item rounded-3 me-2 border">
                <a class="nav-link text-dark" href="#">Referral</a>
              </li>
              <li class="nav-item rounded-3 border">
                <a class="nav-link text-dark" href="#">All other Leads</a>
              </li>
              <li class="nav-item rounded-3 border">
                <a class="nav-link text-dark" href="#">All</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem
            name="Total Leads"
            value="945"
            change="+12"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="New Leads"
            value="945"
            change="+12"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Leads to trials"
            value="945"
            change="+100"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Leads to sales"
            value="945"
            change="+12"
            icon="ph:users-three"
          />
        </div>

        <div class="d-flex justify-content-between pb-3 pt-4">
          <h4>Weekly Classes Facebook Leads</h4>
          <div>
            <SyncoFiltersAgentsDropdown />
            <NuxtLink
              to="/synco/weekly-classes/create/lead"
              class="btn btn-primary text-light ms-2 shadow-sm"
              >+ Add a new lead
            </NuxtLink>
          </div>
        </div>

        <table class="table-hover rounded-4 table border">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">
                <label class="form-check-label text-muted" for="all-table">
                  Date
                </label>
              </th>
              <th class="text-muted" scope="col">Parent name</th>
              <th class="text-muted" scope="col">Email</th>
              <th class="text-muted" scope="col">Phone</th>
              <th class="text-muted" scope="col">Postcode</th>
              <th class="text-muted" scope="col">Kid range</th>
              <th class="text-muted" scope="col">Assigned Agent</th>
              <th class="text-muted" scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <LazySyncoWeeklyClassesLeadsListItem />
            <LazySyncoWeeklyClassesLeadsListItem />
            <LazySyncoWeeklyClassesLeadsListItem />
          </tbody>
        </table>
      </div>
      <div class="col">
        <SyncoWeeklyClassesFormsFindLead />
      </div>
    </div>
  </NuxtLayout>
</template>
