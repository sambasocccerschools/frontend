<script>
export default {
  data: () => ({
    franchiseLeads: 4,
  }),
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Recruitment">
    <div class="card mb-4" style="background-color: #c838a8">
      <div class="card-body p-4">
        <span class="h3 text-light">
          <Icon name="ri:file-list-2-fill" class="mb-1 me-2" /> Franchise
        </span>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem
            name="Monthly Franchise Leads"
            value="945"
            change="+12"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="New Monthly Leads"
            value="945"
            change="+12"
            icon="ph:users-three"
            :removePercentage="true"
          />
          <SyncoDashboardMetricsItem
            name="Leads to assessment"
            value="15"
            change="+100"
            icon="ph:users-three"
            :removePercentage="true"
          />
          <SyncoDashboardMetricsItem
            name="Leads to recruitment"
            value="343"
            change=""
            icon="ph:users-three"
            :removePercentage="true"
          />
        </div>
        <div class="d-flex justify-content-between pb-3 pt-4">
          <h4>Franchise Recruitment Leads</h4>
          <div>
            <SyncoFiltersAgentsDropdown />
            <NuxtLink
              to="/synco/recruitment/create/franchise-lead"
              class="btn btn-primary text-light ms-2 shadow-sm"
              >+ Add a new franchise
            </NuxtLink>
          </div>
        </div>
        <div>
          <SyncoDataOptions />
        </div>
        <table class="table-hover rounded-4 mt-4 table border">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <th scope="col">
                <input class="form-check-input" type="checkbox" disabled />
              </th>
              <th scope="col">Name</th>
              <th class="text-muted" scope="col">Age</th>
              <th class="text-muted" scope="col">Postcode</th>
              <th class="text-muted" scope="col">Telephone</th>
              <th class="text-muted" scope="col">Email</th>
              <th class="text-muted" scope="col">Experience</th>
              <th class="text-muted" scope="col">Capital Available</th>
              <th class="text-muted" scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="item in franchiseLeads">
              <LazySyncoRecruitmentFranchiseLeadsTableItem />
            </template>
          </tbody>
        </table>
      </div>
      <div class="col">
        <SyncoRecruitmentFormsFindLeads />
      </div>
    </div>
  </NuxtLayout>
</template>
